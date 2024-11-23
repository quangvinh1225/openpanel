import type { IconProps } from './types';

export function ReactIcon({ className }: IconProps) {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M229.008 355.376C237.808 355.776 246.8 356.064 255.904 356.064C265.104 356.064 274.192 355.872 283.104 355.376C274.192 366.896 265.392 377.088 256.08 386.8L256.208 386.672C246.944 377.072 238.048 366.864 229.664 356.24L229.008 355.376ZM137.84 342.576C155.168 346.976 176.304 350.72 197.872 353.024L199.968 353.2C213.168 371.328 226.512 387.28 240.832 402.288L240.656 402.096C219.68 425.504 191.376 441.952 159.36 447.856L158.48 447.984C158.416 447.984 158.352 447.984 158.288 447.984C154.32 447.984 150.576 447.008 147.296 445.28L147.424 445.344C134.112 437.744 128.336 408.672 132.832 371.312C133.904 362.112 135.664 352.432 137.824 342.56L137.84 342.576ZM374.368 342.368C376.256 349.952 378.032 359.616 379.296 369.44L379.44 370.816C384.032 408.16 378.368 437.2 365.168 444.96C362.224 446.592 358.704 447.552 354.96 447.552C354.592 447.552 354.224 447.536 353.856 447.52H353.904C321.056 441.52 292.768 425.184 271.84 402.064L271.728 401.936C285.792 387.168 299.04 371.248 311.184 354.496L312.112 353.152C335.728 350.688 356.896 346.88 377.52 341.68L374.368 342.352V342.368ZM156.544 282.656C160.544 290.496 164.736 298.304 169.344 306.144C173.941 313.942 178.64 321.558 183.44 328.992C169.552 326.96 156.144 324.4 143.328 321.28C146.928 308.688 151.44 295.648 156.528 282.624L156.544 282.656ZM355.392 282.256C360.688 295.392 365.184 308.496 368.912 321.2C356.112 324.336 342.592 326.992 328.608 328.992C333.408 321.488 338.208 313.76 342.704 305.84C347.2 298.048 351.408 290.08 355.424 282.24L355.392 282.256ZM121.904 196.672C128.88 220.32 136.368 240.096 145.088 259.168L143.888 256.256C136.432 272.336 129.056 292 123.008 312.24L122.176 315.52C110.88 312.048 101.792 308.64 92.9441 304.816L94.7841 305.52C60.1601 290.784 37.7601 271.408 37.7601 256.048C37.7601 240.688 60.1601 221.216 94.7841 206.544C103.184 202.944 112.4 199.696 121.904 196.672ZM389.728 196.592C399.408 199.584 408.608 202.928 417.216 206.544C451.84 221.344 474.24 240.688 474.24 256.048C474.144 271.408 451.744 290.832 417.12 305.536C408.72 309.136 399.52 312.368 390.032 315.392C382.992 291.664 375.504 271.904 366.816 252.8L368.032 255.808C375.456 239.744 382.848 220.08 388.88 199.84L389.728 196.544V196.592ZM328.48 183.104C342.384 185.168 355.776 187.696 368.592 190.848C364.992 203.488 360.496 216.48 355.392 229.504C351.392 221.712 347.2 213.856 342.592 206.032C338.096 198.192 333.296 190.56 328.496 183.12L328.48 183.104ZM183.328 183.104C178.528 190.64 173.728 198.352 169.248 206.304C164.752 214.096 160.544 221.936 156.544 229.776C151.248 216.656 146.752 203.584 143.024 190.848C155.824 187.856 169.312 185.184 183.312 183.136L183.328 183.104ZM256 178.016C270.8 178.016 285.536 178.688 300.032 179.872C308.149 191.51 316.032 203.904 323.68 217.056C331.115 229.856 337.899 242.827 344.032 255.968C337.872 269.072 331.12 282.16 323.776 294.96C316.176 308.16 308.32 320.72 300.176 332.352C285.616 333.616 270.864 334.304 255.984 334.304C241.184 334.304 226.448 333.6 211.952 332.448C203.84 320.816 195.92 308.368 188.304 295.264C180.869 282.464 174.085 269.494 167.952 256.352C174.016 243.216 180.864 230.096 188.208 217.28C195.808 204.08 203.664 191.568 211.808 179.936C226.368 178.656 241.12 177.984 256 177.984V178.016ZM255.696 125.52C264.976 135.12 273.872 145.312 282.24 155.936L282.88 156.784C274.08 156.384 265.088 156.112 255.984 156.112C246.784 156.112 237.696 156.304 228.784 156.784C237.68 145.264 246.48 135.072 255.808 125.36L255.68 125.488L255.696 125.52ZM158.08 64.5282C190.928 70.5442 219.2 86.8802 240.144 109.984L240.256 110.112C226.192 124.896 212.944 140.816 200.8 157.6L199.872 158.944C176.272 161.392 155.104 165.168 134.496 170.368L137.632 169.696C135.392 159.904 133.728 150.416 132.56 141.312C127.968 103.968 133.632 74.9282 146.832 67.2002C150.128 65.6482 153.984 64.6882 158.048 64.5602H158.096L158.08 64.5282ZM353.44 64.1282V64.2562C353.648 64.2562 353.888 64.2402 354.144 64.2402C357.968 64.2402 361.568 65.1842 364.736 66.8482L364.608 66.7842C377.92 74.4162 383.696 103.472 379.2 140.848C378.128 150.048 376.368 159.744 374.208 169.632C356.848 165.184 335.712 161.424 314.144 159.136L312.096 158.96C298.88 140.816 285.536 124.864 271.216 109.84L271.408 110.032C292.384 86.6722 320.64 70.2242 352.592 64.2882L353.488 64.1442L353.44 64.1282ZM353.536 42.3362C314.464 48.2722 280.64 67.2482 255.936 94.6242L255.808 94.7682C230.928 67.4082 197.104 48.5602 158.992 42.8482L158.096 42.7362C157.888 42.7362 157.632 42.7362 157.376 42.7362C149.52 42.7362 142.144 44.8002 135.76 48.4162L135.984 48.3042C108.496 64.1602 102.336 113.568 116.528 175.568C55.6641 194.368 16.0801 224.416 16.0801 256.08C16.0801 287.872 55.8721 318 116.912 336.656C102.832 398.896 109.12 448.384 136.672 464.224C142.72 467.696 149.984 469.728 157.712 469.728C158.064 469.728 158.416 469.728 158.752 469.712H158.704C197.776 463.776 231.6 444.784 256.304 417.392L256.432 417.248C281.312 444.624 315.136 463.472 353.248 469.184L354.144 469.296C354.384 469.296 354.688 469.296 354.976 469.296C362.784 469.296 370.128 467.248 376.48 463.68L376.256 463.792C403.728 447.952 409.904 398.544 395.712 336.528C456.352 317.888 495.936 287.776 495.936 256.064C495.936 224.272 456.144 194.144 395.104 175.44C409.184 113.264 402.896 63.7282 375.344 47.8722C369.232 44.3682 361.904 42.3042 354.096 42.3042C353.888 42.3042 353.68 42.3042 353.472 42.3042H353.504L353.536 42.3362ZM300.592 256.08C300.592 280.768 280.576 300.784 255.888 300.784C231.2 300.784 211.184 280.768 211.184 256.08C211.184 231.392 231.2 211.376 255.888 211.376C268.24 211.376 279.408 216.384 287.504 224.464C295.6 232.56 300.592 243.728 300.592 256.08Z"
        fill="currentColor"
      />
    </svg>
  );
}