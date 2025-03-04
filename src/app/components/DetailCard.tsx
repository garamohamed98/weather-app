export const DetailCard = ({
  title,
  amount,
  description,
  icon,
}: {
  title: string;
  amount: String;
  description: string;
  icon: string;
}) => {
  return (
    <div className="bg-[#363636] p-8 rounded-2xl flex flex-col justify-between gap-4 items-end">
      <div className="flex gap-2">
        <i className={icon}></i>
        <p>{title}</p>
      </div>
      <h2 className="text-3xl font-bold">{amount}</h2>
      <p className="opacity-50">{description}</p>
    </div>
  );
};
