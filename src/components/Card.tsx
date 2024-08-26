import Link from "next/link";
import { Character } from "../types/character";
import Image from "next/image";

type Props = {
  character: Character;
};
export const Card: React.FC<Props> = ({ character }) => {
  return (
    <div className="flex">
      <Link
        href={`/character/${character.id}`}
        className="text-white p-4 border border-custom-main rounded-lg shadow-lg hover:shadow-custom transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300"
      >
        <div className="relative w-full ">
          <Image
            src={character.image}
            alt={character.name}
            className="rounded-t-lg"
            width={240}
            height={170}
          />
        </div>
        <div className="mt-4 text-center text-lg">
          <h2 className="mt-2"> {character.name}</h2>
          <h1 className="mt-2 text-gray-700"> {character.species}</h1>
        </div>
        {/* </div> */}
      </Link>
    </div>
  );
};
