export default function Button({
  title,
  type,
  onClick,
}: {
  title: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
}) {
  return (
    <button
      className='bg-gray-300 py-1 px-4 md:min-w-20'
      type={type}
      onClick={onClick}
    >
      <span>{title}</span>
    </button>
  );
}
