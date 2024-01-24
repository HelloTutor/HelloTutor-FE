import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

export const NextArrow = ({ currentSlide, slideCount, ...props }: any) => (
  <div {...props}>
    <ArrowRightCircleIcon className="h-10 w-10 absolute z-10 top-[15px] right-[-15px] text-[#323232]" />
  </div>
);
export const PrevArrow = ({ currentSlide, slideCount, ...props }: any) => (
  <div {...props}>
    <ArrowLeftCircleIcon className="h-10 w-10 absolute z-10 top-[15px] left-[-25px] text-[#323232]" />
  </div>
);
