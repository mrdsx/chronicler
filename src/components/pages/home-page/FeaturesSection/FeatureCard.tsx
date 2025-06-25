interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactElement;
}

export function FeatureCard(props: FeatureCardProps) {
  return (
    <div className="flex flex-col">
      <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-white">
        {props.icon}
        {props.title}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
        {props.description}
      </dd>
    </div>
  );
}
