export const EducationCap = ({ ...props }) => {
  return (
    <svg
      height={props.height}
      width={props.width}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <path
          fill={props.color}
          d="M31,26c-0.6,0-1-0.4-1-1V12c0-0.6,0.4-1,1-1s1,0.4,1,1v13C32,25.6,31.6,26,31,26z"
        />
      </g>
      <g>
        <path
          fill={props.color}
          d="M16,21c-0.2,0-0.3,0-0.5-0.1l-15-8C0.2,12.7,0,12.4,0,12s0.2-0.7,0.5-0.9l15-8c0.3-0.2,0.6-0.2,0.9,0l15,8c0.3,0.2,0.5,0.5,0.5,0.9s-0.2,0.7-0.5,0.9l-15,8C16.3,21,16.2,21,16,21z"
        />
      </g>
      <path
        fill={props.color}
        d="M17.4,22.6C17,22.9,16.5,23,16,23s-1-0.1-1.4-0.4L6,18.1V22c0,3.1,4.9,6,10,6s10-2.9,10-6v-3.9L17.4,22.6z"
      />
    </svg>
  );
};
