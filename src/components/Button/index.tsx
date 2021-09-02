import './styles.css';

type Props = { texto: String };

const Button = ({ texto }: Props) => {
  return (
    <div>
      <button className="btn">
        <p>{texto}</p>
      </button>
    </div>
  );
};

export default Button;