import React from "react";

export function AccountIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill="black"
        fillRule="evenodd"
        d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7Zm1.13 8a2.11 2.11 0 0 0-.338.014 1.421 1.421 0 0 0-.148.018 2 2 0 0 0-1.612 1.612c-.028.154-.032.36-.032 1.04V19.4a8.194 8.194 0 0 0 .011.588l.014.002c.116.01.278.01.575.01h10.8a8.207 8.207 0 0 0 .589-.012v-.013c.01-.116.011-.279.011-.575v-1.721c0-.674-.004-.88-.032-1.032a2 2 0 0 0-1.614-1.615 1.443 1.443 0 0 0-.146-.018 2.114 2.114 0 0 0-.337-.014.97.97 0 0 0-.1.01m-.096.024-.045.017a4.473 4.473 0 0 0-.154.064c-.139.06-.325.144-.59.264-.881.4-1.86.621-2.886.621a6.978 6.978 0 0 1-2.886-.62c-.265-.12-.451-.205-.59-.265a4.47 4.47 0 0 0-.154-.064l-.045-.017h.002a1.008 1.008 0 0 0-.098-.023 1.024 1.024 0 0 0-.1-.011m-.459-1.982c.2-.016.381-.03.608-.013.223.017.376.044.591.105.221.062.544.209.962.398l.108.05A4.98 4.98 0 0 0 12 14a4.979 4.979 0 0 0 2.168-.492c.419-.19.742-.336.962-.398.215-.06.369-.088.592-.105.226-.017.407-.003.608.013l.03.002c.117.009.231.022.347.043a4 4 0 0 1 3.23 3.23c.063.353.063.753.063 1.292v1.847c0 .252 0 .498-.017.706a2.022 2.022 0 0 1-.201.77 2 2 0 0 1-.874.874 2.022 2.022 0 0 1-.77.201c-.208.017-.454.017-.706.017H6.568c-.252 0-.498 0-.706-.017a2.022 2.022 0 0 1-.77-.201 2 2 0 0 1-.874-.874 2.022 2.022 0 0 1-.201-.77C4 19.93 4 19.684 4 19.432V17.59c0-.544 0-.947.064-1.303a4 4 0 0 1 3.223-3.223 3.395 3.395 0 0 1 .383-.046Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FavoritesIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`${active ? "fill-red-500" : "fill-none"}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.99995C10.2006 3.90293 7.19377 3.25485 4.93923 5.17509C2.68468 7.09533 2.36727 10.3059 4.13778 12.577C5.60984 14.4652 10.0648 18.4477 11.5249 19.7366C11.6882 19.8808 11.7699 19.9529 11.8652 19.9813C11.9483 20.006 12.0393 20.006 12.1225 19.9813C12.2178 19.9529 12.2994 19.8808 12.4628 19.7366C13.9229 18.4477 18.3778 14.4652 19.8499 12.577C21.6204 10.3059 21.3417 7.07513 19.0484 5.17509C16.7551 3.27505 13.7994 3.90293 12 5.99995Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CatalogIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 5.99983V4.28415C16 3.51563 16 3.13137 15.8387 2.88297C15.6976 2.66563 15.4776 2.51156 15.2252 2.45321C14.9366 2.38653 14.5755 2.51785 13.8532 2.78048L6.57982 5.42536C6.01064 5.63233 5.72605 5.73582 5.51615 5.91821C5.33073 6.07932 5.18772 6.28349 5.09968 6.5128C5 6.7724 5 7.07522 5 7.68086V11.9998M9 16.9998H15M9 13.4998H15M9 9.99983H15M8.2 20.9998H15.8C16.9201 20.9998 17.4802 20.9998 17.908 20.7818C18.2843 20.5901 18.5903 20.2841 18.782 19.9078C19 19.48 19 18.9199 19 17.7998V9.19983C19 8.07973 19 7.51968 18.782 7.09185C18.5903 6.71553 18.2843 6.40957 17.908 6.21782C17.4802 5.99983 16.9201 5.99983 15.8 5.99983H8.2C7.0799 5.99983 6.51984 5.99983 6.09202 6.21782C5.71569 6.40957 5.40973 6.71553 5.21799 7.09185C5 7.51968 5 8.07973 5 9.19983V17.7998C5 18.9199 5 19.48 5.21799 19.9078C5.40973 20.2841 5.71569 20.5901 6.09202 20.7818C6.51984 20.9998 7.07989 20.9998 8.2 20.9998Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FilterIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 6H19M21 12H16M21 18H16M7 20V13.5612C7 13.3532 7 13.2492 6.97958 13.1497C6.96147 13.0615 6.93151 12.9761 6.89052 12.8958C6.84431 12.8054 6.77934 12.7242 6.64939 12.5617L3.35061 8.43826C3.22066 8.27583 3.15569 8.19461 3.10948 8.10417C3.06849 8.02393 3.03853 7.93852 3.02042 7.85026C3 7.75078 3 7.64677 3 7.43875V5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H13.4C13.9601 4 14.2401 4 14.454 4.10899C14.6422 4.20487 14.7951 4.35785 14.891 4.54601C15 4.75992 15 5.03995 15 5.6V7.43875C15 7.64677 15 7.75078 14.9796 7.85026C14.9615 7.93852 14.9315 8.02393 14.8905 8.10417C14.8443 8.19461 14.7793 8.27583 14.6494 8.43826L11.3506 12.5617C11.2207 12.7242 11.1557 12.8054 11.1095 12.8958C11.0685 12.9761 11.0385 13.0615 11.0204 13.1497C11 13.2492 11 13.3532 11 13.5612V17L7 20Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4 4 16 16m0-16L4 20"
      />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 6L9 12L15 18"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function SortIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6 7 3m0 0L4 6m3-3v14m7 1 3 3m0 0 3-3m-3 3V7" /></svg>
  )

}

export function UPArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v12m0-12-5 5m5-5 5 5"
      />
    </svg>
  );
}

export function DeleteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 6 12 12m0-12L6 18" /></svg>
  );
}

export function ChevronArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 6-4 4-4-4" /></svg>
  );
}