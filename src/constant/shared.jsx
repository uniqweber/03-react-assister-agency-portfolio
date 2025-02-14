export const SectionTitle = ({
  smallText,
  title,
  subTitle,
  smallTextColor,
  titleColor,
  subTitleColor,
}) => {
  return (
    <div className="uppercase ">
      <div className="flex items-center gap-4">
        <h5 className={`text-xl   ${smallTextColor}`}>{smallText}</h5>
        <div
          className={`bg-highlight w-32 h-1.5 rounded-full ${smallTextColor}`}
        ></div>
      </div>
      <h2 className={` text-4xl font-semibold ${titleColor}`}>{title}</h2>
      <h5 className={` text-sm tracking-wide   ${subTitleColor}`}>
        {subTitle}
      </h5>
    </div>
  );
};
