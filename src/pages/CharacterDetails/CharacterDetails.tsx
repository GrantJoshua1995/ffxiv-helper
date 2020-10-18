import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FFXIVApi } from "../../services/api";

interface ParamsType {
  id: string;
}

const CharacterDetails = () => {
  const { id } = useParams<ParamsType>();
  useEffect(() => {
    FFXIVApi.fetchCharacterDetails(id);
  }, [id]);
  return <div></div>;
};

export default CharacterDetails;
