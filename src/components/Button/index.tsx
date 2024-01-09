export default function Button({
  title,
  type,
}: {
  title: string;
  type: 'submit' | 'reset' | 'button' | undefined;
}) {
  return (
    <button className='bg-gray-300 py-1 px-4 md:min-w-20' type={type}>
      <span>{title}</span>
    </button>
  );
}
