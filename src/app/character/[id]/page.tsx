import { API_URL } from "@/src/store/CharactersSlice";
import { Character } from "@/src/types/character";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import NotFoundPage from "../../not-found";

type Props = {
  params: {
    id: string;
  };
};

const CharacterPage = async ({ params }: Props) => {
  const { id } = params;

  let character: Character | null = null;
  let error: string | null = null;

  try {
    const response = await fetch(`${API_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    character = await response.json();
  } catch (err) {
    error = "Error loading character";
  }

  if (!character || error) {
    return (
      <div className="text-custom-main text-center mt-10">
        <NotFoundPage />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Link href="/">
        <div className="flex items-center text-custom-main mb-6 cursor-pointer">
          <AiOutlineArrowLeft className="mr-2 text-xl" />
          <span className="text-lg">GO BACK</span>
        </div>
      </Link>
      <div className="bg-custom-bg p-6 rounded-lg shadow-custom">
        <div className="flex flex-col items-center">
          <Image
            src={character.image}
            alt={character.name}
            width={240}
            height={240}
            className="rounded-full mb-4"
          />
          <p className="text-text-b text-2xl font-bold mb-2">
            {character.name}
          </p>
          <h3 className="text-gray text-lg mb-6">Informations</h3>
        </div>
        <div className="info grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="list p-4 bg-gray-800 rounded-lg shadow-inner">
            <h4 className="text-custom-main text-xl mb-2">
              Gender <br />
              <span className="text-text-b">{character.gender}</span>
            </h4>
            <div className="border-b-2 border-text-b mb-4"></div>
            <h4 className="text-custom-main text-xl mb-2">
              Status <br />
              <span className="text-text-b">{character.status}</span>
            </h4>
            <div className="border-b-2 border-text-b mb-4"></div>
            <h4 className="text-custom-main text-xl mb-2">
              Specie <br />
              <span className="text-text-b">{character.species}</span>
            </h4>
            <div className="border-b-2 border-text-b mb-4"></div>
            <h4 className="text-custom-main text-xl mb-2">
              Origin <br />
              <span className="text-text-b">{character.origin?.name}</span>
            </h4>
            <div className="border-b-2 border-text-b mb-4"></div>
            <h4 className="text-custom-main text-xl mb-2">
              Type <br />
              <span className="text-text-b">
                {character.type ? character.type : "Unknown"}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
