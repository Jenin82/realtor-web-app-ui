type Props = {
  icon: React.ReactNode;
  label: string;
};

const FeatureBadge = (props: Props) => {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-accent px-2 py-2.5 text-sm font-medium">
      <div className="bg-white p-2 rounded-full w-fit">{props.icon}</div>
      {props.label}
    </div>
  );
};

export default FeatureBadge;
