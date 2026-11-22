export const PrimaryButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-primary-color text-white px-4 py-2 border-2 border-primary-color rounded-md hover:bg-secondary-color hover:border-primary-color hover:text-primary-color transition-all duration-300 !cursor-pointer">
      {text}
    </button>
  );
};

export const SecondaryButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-secondary-color text-primary-color px-4 py-2 border-2 border-primary-color rounded-md hover:bg-primary-color hover:border-secondary-color hover:text-secondary-color transition-all duration-300 !cursor-pointer">
      {text}
    </button>
  );
};
