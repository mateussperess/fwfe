import { Input } from "./common/Input";

type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
};

export function HeroSearch({ onChange, placeholder, name, value }: Props) {
  return (
    <div className="hero-search-wrapper">
      <h2>Encontre seu Herói</h2>
      <Input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
