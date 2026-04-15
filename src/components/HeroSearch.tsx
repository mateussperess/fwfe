import { Input } from "./common/Input";

type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
};

export function HeroSearch({ onChange, placeholder, name, value }: Props) {
  const handleUseSuggestion = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("Botao clicado!" + event.currentTarget.value);
    const heroName = event.currentTarget.value;
    onChange(heroName);
  };

  return (
    <div className="hero-search-wrapper">
      <h2>HeroBase</h2>

      <p className="hero-search-subtitle">Insert a hero name</p>

      <div className="hero-search-input-area">
        <Input
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {value && (
          <button onClick={() => onChange("")} className="clear-btn">
            ✕
          </button>
        )}
      </div>

      <div className="hero-search-suggestions">
        <button value={"Spider-Man"} onClick={handleUseSuggestion}>
          Spider-Man
        </button>
        <button value={"Batman"} onClick={handleUseSuggestion}>
          Batman
        </button>
        <button value={"Captain America"} onClick={handleUseSuggestion}>
          Captain America
        </button>
      </div>
    </div>
  );
}
