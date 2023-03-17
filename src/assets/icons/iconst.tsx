import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function EyeIcon(props: SvgProps) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 16 10"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.028 5.9c.13-.266.197-.55.195-.834 0-.633-.327-1.24-.91-1.687-.584-.448-1.376-.7-2.2-.7-.368.001-.732.052-1.075.15l.73.578c.11-.014.223-.021.335-.021.584-.001 1.144.175 1.559.49.414.315.65.742.654 1.19 0 .086-.01.172-.027.257l.74.578z"
        fill={props?.fill}
      />
      <Path
        d="M15.155 4.902c-1.528-2.167-4.208-3.478-7.174-3.478a9.763 9.763 0 00-2.377.295l.73.564a8.637 8.637 0 011.647-.164c2.553 0 4.875 1.093 6.258 2.933a6.986 6.986 0 01-1.982 1.774l.644.494c.928-.575 1.699-1.284 2.268-2.087l.118-.167-.132-.164zM1.814.815l2.022 1.551C2.558 2.998 1.513 3.871.802 4.902l-.117.164.117.167C2.331 7.4 5.011 8.71 7.977 8.71c1.157 0 2.3-.201 3.342-.588l2.267 1.74.794-.523L2.59.297l-.776.518zm4.421 3.391L9.251 6.52c-.34.162-.733.249-1.134.25-.29 0-.58-.043-.848-.129a2.339 2.339 0 01-.718-.37 1.738 1.738 0 01-.478-.553 1.357 1.357 0 01-.164-.651c.005-.304.118-.601.326-.86zm-.657-.504c-.424.459-.623 1.018-.562 1.579.062.56.38 1.086.9 1.484.518.398 1.203.642 1.934.69.731.047 1.46-.106 2.059-.431l.725.556a8.563 8.563 0 01-2.657.418c-2.553 0-4.875-1.092-6.258-2.932.663-.902 1.62-1.657 2.775-2.192l1.084.828z"
        fill={props?.fill}
      />
    </Svg>
  );
}
export function CheckoutIcon(props: SvgProps) {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71646C0.00541604 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66116C18.9946 1.31696 15.8152 0 12.5 0ZM10.7143 17.4911L6.25 13.0268L7.66965 11.6071L10.7143 14.6518L17.3304 8.03571L18.7554 9.45178L10.7143 17.4911Z"
        fill="#F4B840"
      />
    </Svg>
  );
}
export function PersonIcon(props: SvgProps) {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 21 22"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.063 5.063a5.069 5.069 0 005.062 5.062 5.069 5.069 0 005.063-5.063A5.069 5.069 0 0010.125 0a5.069 5.069 0 00-5.063 5.063zm14.062 16.312h1.125V20.25c0-4.341-3.534-7.875-7.875-7.875h-4.5C3.533 12.375 0 15.909 0 20.25v1.125h19.125z"
        fill={props?.fill}
        fillOpacity={0.7}
      />
    </Svg>
  );
}
export function PenIcon(props: SvgProps) {
  return (
    <Svg
      width={11}
      height={11}
      viewBox="0 0 12 13"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.144 2.29L9.3.278a.842.842 0 00-1.252 0L.224 8.809v3.375h3.09l7.824-8.53c.341-.379.341-.986 0-1.365h.006zm-8.293 8.675H1.342V9.32l5.276-5.758 1.514 1.652-5.281 5.751zm4.554-8.262L8.92 4.354l1.268-1.383-1.514-1.65-1.269 1.382z"
        fill={props.fill}
      />
    </Svg>
  );
}
export function HomeIcon(props: SvgProps) {
  return (
    <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
      <Path
        d="M8.25 18.375V12.75h4.5v5.625c0 .619.506 1.125 1.125 1.125h3.375c.619 0 1.125-.506 1.125-1.125V10.5h1.912c.518 0 .765-.641.372-.979L11.254 1.05a1.134 1.134 0 00-1.508 0L.341 9.52a.56.56 0 00.371.979h1.913v7.875c0 .619.506 1.125 1.125 1.125h3.375c.619 0 1.125-.506 1.125-1.125z"
        fill={props?.fill}
      />
    </Svg>
  );
}

export const HomeIconActive = (props: SvgProps) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 24 26"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.70835 23.5257V19.8456C8.70833 18.9096 9.44466 18.149 10.357 18.1427H13.6987C14.6154 18.1427 15.3585 18.9051 15.3585 19.8456V23.5371C15.3583 24.3318 15.9765 24.9814 16.7509 25H18.9787C21.1996 25 23 23.1528 23 20.8742V10.4054C22.9881 9.50899 22.5779 8.66722 21.8861 8.11964L14.2668 1.82236C12.932 0.72588 11.0346 0.72588 9.69975 1.82236L2.11392 8.13107C1.41946 8.67643 1.00855 9.5196 1 10.4168V20.8742C1 23.1528 2.80038 25 5.02127 25H7.24911C8.04273 25 8.68608 24.3399 8.68608 23.5257"
        fill={props.fill ? props.fill : 'white'}
      />
      <Path
        d="M8.70835 23.5257V19.8456C8.70833 18.9096 9.44466 18.149 10.357 18.1427H13.6987C14.6154 18.1427 15.3585 18.9051 15.3585 19.8456V19.8456V23.5371C15.3583 24.3318 15.9765 24.9814 16.7509 25H18.9787C21.1996 25 23 23.1528 23 20.8742V20.8742V10.4054C22.9881 9.50899 22.5779 8.66722 21.8861 8.11964L14.2668 1.82236C12.932 0.72588 11.0346 0.72588 9.69975 1.82236L2.11392 8.13107C1.41946 8.67643 1.00855 9.5196 1 10.4168V20.8742C1 23.1528 2.80038 25 5.02127 25H7.24911C8.04273 25 8.68608 24.3399 8.68608 23.5257V23.5257"
        stroke={props.fill ? props.fill : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const HomeIconNotActive = (props: SvgProps) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 24 26"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.70835 23.5257V19.8456C8.70833 18.9096 9.44466 18.149 10.357 18.1427H13.6987C14.6154 18.1427 15.3585 18.9051 15.3585 19.8456V23.5371C15.3583 24.3318 15.9765 24.9814 16.7509 25H18.9787C21.1996 25 23 23.1528 23 20.8742V10.4054C22.9881 9.50899 22.5779 8.66722 21.8861 8.11964L14.2668 1.82236C12.932 0.72588 11.0346 0.72588 9.69975 1.82236L2.11392 8.13107C1.41946 8.67643 1.00855 9.5196 1 10.4168V20.8742C1 23.1528 2.80038 25 5.02127 25H7.24911C8.04273 25 8.68608 24.3399 8.68608 23.5257"
        fill={props.fill ? props.fill : 'white'}
      />
      <Path
        d="M8.70835 23.5257V19.8456C8.70833 18.9096 9.44466 18.149 10.357 18.1427H13.6987C14.6154 18.1427 15.3585 18.9051 15.3585 19.8456V19.8456V23.5371C15.3583 24.3318 15.9765 24.9814 16.7509 25H18.9787C21.1996 25 23 23.1528 23 20.8742V20.8742V10.4054C22.9881 9.50899 22.5779 8.66722 21.8861 8.11964L14.2668 1.82236C12.932 0.72588 11.0346 0.72588 9.69975 1.82236L2.11392 8.13107C1.41946 8.67643 1.00855 9.5196 1 10.4168V20.8742C1 23.1528 2.80038 25 5.02127 25H7.24911C8.04273 25 8.68608 24.3399 8.68608 23.5257V23.5257"
        stroke={props.fill ? props.fill : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const ProfileIconActive = (props: SvgProps) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 26 26"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2 21.9973C2 19.0578 4.66722 16.5541 8.29206 16.0908L8.61857 16.0491C11.5212 15.6781 14.4788 15.6781 17.3814 16.0491L17.7079 16.0908C21.3328 16.5541 24 19.0578 24 21.9973C24 23.2678 22.7138 24.2978 21.1272 24.2978H4.87277C3.28618 24.2978 2 23.2678 2 21.9973Z"
        fill={props.fill ? props.fill : 'white'}
      />
      <Path
        d="M19.4167 7.16775C19.4167 9.81674 16.5439 11.9642 13 11.9642C9.4562 11.9642 6.58337 9.81674 6.58337 7.16775C6.58337 4.51877 9.4562 2.37134 13 2.37134C16.5439 2.37134 19.4167 4.51877 19.4167 7.16775Z"
        fill={props.fill ? props.fill : 'white'}
      />
      <Path
        d="M2 21.9973C2 19.0578 4.66722 16.5541 8.29206 16.0908L8.61857 16.0491C11.5212 15.6781 14.4788 15.6781 17.3814 16.0491L17.7079 16.0908C21.3328 16.5541 24 19.0578 24 21.9973C24 23.2678 22.7138 24.2978 21.1272 24.2978H4.87277C3.28618 24.2978 2 23.2678 2 21.9973Z"
        stroke={props.fill ? props.fill : 'white'}
        strokeWidth="3"
      />
      <Path
        d="M19.4167 7.16775C19.4167 9.81674 16.5439 11.9642 13 11.9642C9.4562 11.9642 6.58337 9.81674 6.58337 7.16775C6.58337 4.51877 9.4562 2.37134 13 2.37134C16.5439 2.37134 19.4167 4.51877 19.4167 7.16775Z"
        stroke={props.fill ? props.fill : 'white'}
        strokeWidth="3"
      />
    </Svg>
  );
};

export const ProfileIconNotActive = (props: SvgProps) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 26 26"
      fill={props.fill ? props.fill : 'white'}
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2 21.9973C2 19.0578 4.66722 16.5541 8.29206 16.0908L8.61857 16.0491C11.5212 15.6781 14.4788 15.6781 17.3814 16.0491L17.7079 16.0908C21.3328 16.5541 24 19.0578 24 21.9973C24 23.2678 22.7138 24.2978 21.1272 24.2978H4.87277C3.28618 24.2978 2 23.2678 2 21.9973Z"
        stroke={props.fill ? props.fill : 'white'}
        strokeWidth="3"
      />
      <Path
        d="M19.4167 7.16775C19.4167 9.81674 16.5439 11.9642 13 11.9642C9.4562 11.9642 6.58337 9.81674 6.58337 7.16775C6.58337 4.51877 9.4562 2.37134 13 2.37134C16.5439 2.37134 19.4167 4.51877 19.4167 7.16775Z"
        stroke={props.fill ? props.fill : 'white'}
        strokeWidth="3"
      />
    </Svg>
  );
};
export function PlusIcon(props: SvgProps) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 19 19"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18.462 11.054h-7.07V18.3h-3.71v-7.245H.612v-3.36h7.07V.45h3.71v7.245h7.07v3.36z"
        fill={props?.fill}
      />
    </Svg>
  );
}
export function BottomArrow(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={10}
      viewBox="0 0 12 7"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.114.776c.831 0 1.314.713.83 1.225L6.564 6.63a1 1 0 01-.374.242 1.299 1.299 0 01-.956-.02.96.96 0 01-.358-.255L.958 1.967c-.435-.514.052-1.19.86-1.19h8.296z"
        fill={props?.fill}
      />
    </Svg>
  );
}

export function ArrowBottomMarked(props: SvgProps) {
  return (
    <Svg
      width={8}
      height={12}
      viewBox="0 0 8 12"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.625 7.94l-2.25 2.25V.41h-.75v9.78l-2.25-2.25-.53.53L4 11.625 7.155 8.47l-.53-.53z"
        fill={props?.fill}
      />
    </Svg>
  );
}

export function RightArrow(props: SvgProps) {
  return (
    <Svg
      width={15}
      height={16}
      viewBox="0 0 8 12"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 0L.59 1.41 5.17 6 .59 10.59 2 12l6-6-6-6z"
        fill={props?.fill}
      />
    </Svg>
  );
}
export function MinusIcon(props: SvgProps) {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 13 3"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M.032 2.25V0h12.184v2.25H.032z" fill={props?.fill} />
    </Svg>
  );
}
export function EditIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.256 14.422L13 6.678 9.322 3l-7.744 7.744a.836.836 0 00-.22.387L.5 15.5l4.368-.858a.835.835 0 00.388-.22zM15.5 4.178a1.666 1.666 0 000-2.356L14.178.5a1.667 1.667 0 00-2.356 0L10.5 1.822 14.178 5.5 15.5 4.178z"
        fill="#0052FF"
      />
    </Svg>
  );
}

export function HandLeft(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height={24}
      width={24}
      {...props}>
      <Path d="M3 16V5.75a1.25 1.25 0 012.5 0V12h1V2.75a1.25 1.25 0 012.5 0V12h1V1.25a1.25 1.25 0 012.5 0V12h1V3.25a1.25 1.25 0 012.5 0V15h.75l1.41-3.53c.22-.55.68-.97 1.24-1.16l.79-.26a1 1 0 011.24 1.32L18.4 19c-1.21 3-4.14 5-7.4 5-4.42 0-8-3.58-8-8z" />
    </Svg>
  );
}
