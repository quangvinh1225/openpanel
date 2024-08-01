import { Api } from './api';

export type TrackHandlerPayload =
  | {
      type: 'track';
      payload: TrackPayload;
    }
  | {
      type: 'increment';
      payload: IncrementPayload;
    }
  | {
      type: 'decrement';
      payload: DecrementPayload;
    }
  | {
      type: 'alias';
      payload: AliasPayload;
    }
  | {
      type: 'identify';
      payload: IdentifyPayload;
    };

export type TrackPayload = {
  name: string;
  properties?: Record<string, unknown>;
  profileId?: string;
};

export type TrackProperties = {
  [key: string]: unknown;
  profileId?: string;
};

export type IdentifyPayload = {
  profileId: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  avatar?: string;
  properties?: Record<string, unknown>;
};

export type AliasPayload = {
  profileId: string;
  alias: string;
};

export type IncrementPayload = {
  profileId: string;
  property: string;
  value?: number;
};

export type DecrementPayload = {
  profileId: string;
  property: string;
  value?: number;
};

export type OpenPanelOptions = {
  clientId: string;
  clientSecret?: string;
  apiUrl?: string;
  sdk?: string;
  sdkVersion?: string;
  waitForProfile?: boolean;
  filter?: (payload: TrackHandlerPayload) => boolean;
};

export class OpenPanel {
  api: Api;
  profileId?: string;
  global?: Record<string, any>;
  queue: TrackHandlerPayload[] = [];

  constructor(public options: OpenPanelOptions) {
    const defaultHeaders: Record<string, string> = {
      'openpanel-client-id': options.clientId,
    };

    if (options.clientSecret) {
      defaultHeaders['openpanel-client-secret'] = options.clientSecret;
    }

    defaultHeaders['openpanel-sdk'] = options.sdk || 'node';
    defaultHeaders['openpanel-sdk-version'] =
      options.sdkVersion || process.env.SDK_VERSION!;

    this.api = new Api({
      baseUrl: options.apiUrl || 'https://api.openpanel.dev',
      defaultHeaders,
    });
  }

  init() {
    // empty
  }

  ready() {
    this.options.waitForProfile = false;
    this.flush();
  }

  async send(payload: TrackHandlerPayload) {
    if (this.options.filter && !this.options.filter(payload)) {
      return Promise.resolve();
    }

    if (this.options.waitForProfile && !this.profileId) {
      this.queue.push(payload);
      return Promise.resolve();
    }
    return this.api.fetch('/track', payload);
  }

  setGlobalProperties(properties: Record<string, any>) {
    this.global = {
      ...this.global,
      ...properties,
    };
  }

  async track(name: string, properties?: TrackProperties) {
    return this.send({
      type: 'track',
      payload: {
        name,
        profileId: properties?.profileId ?? this.profileId,
        properties: {
          ...(this.global ?? {}),
          ...(properties ?? {}),
        },
      },
    });
  }

  async identify(payload: IdentifyPayload) {
    if (payload.profileId) {
      this.profileId = payload.profileId;
      this.flush();
    }

    if (Object.keys(payload).length > 1) {
      return this.send({
        type: 'identify',
        payload: {
          ...payload,
          properties: {
            ...this.global,
            ...payload.properties,
          },
        },
      });
    }
  }

  async alias(payload: AliasPayload) {
    return this.send({
      type: 'alias',
      payload,
    });
  }

  async increment(payload: IncrementPayload) {
    return this.send({
      type: 'increment',
      payload,
    });
  }

  async decrement(payload: DecrementPayload) {
    return this.send({
      type: 'decrement',
      payload,
    });
  }

  clear() {
    this.profileId = undefined;
    // session end?
  }

  flush() {
    this.queue.forEach((item) => {
      this.send({
        ...item,
        // Not user why ts-expect-error is needed here
        // @ts-expect-error
        payload: {
          ...item.payload,
          profileId: this.profileId,
        },
      });
    });
    this.queue = [];
  }
}