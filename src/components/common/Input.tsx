import "../../styles/components/input.scss";

type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
};

export function Input({ onChange, placeholder, name, value }: Props) {
  return (
    <input
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  );
}
