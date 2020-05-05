import React from "react";
import styled from "styled-components";
import { ReactComponent as Light } from "../modules/theme/icons/light.svg";
import { ReactComponent as Arrow } from "../modules/theme/icons/arrow.svg";

export const ModalHoraires = (props) => {
  return (
    <ModalHorairesWrapper>
      <ModalWrapper>
        <CustomLight />
        <ModalTitle>Ajouter vos horaires d'ouverture</ModalTitle>
        <ModalContent>
          Il est important pour les visiteurs de savoir quand votre activité est
          ouverte, par exemple pour planifier leur venue. Note covid-19 : Si
          vous ne savez pas encore quand votre établissement ouvrira, vous
          pouvez enregistrer vos horaires habituels et ajouter une période de
          fermeture sur les prochains jours/semaines.
        </ModalContent>
        <ModalButton>
          Ajouter des horaires d'ouverture <CustomArrow />
        </ModalButton>
        <ModalLink href="/">
          Mon activité n'a pas d'horaires d'ouverture
        </ModalLink>
      </ModalWrapper>
    </ModalHorairesWrapper>
  );
};
const ModalHorairesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  max-width: 966px;
  height: 600px;
  margin: auto;
  text-align: center;
  background: white;
`;
const ModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 600px;
  height: 372px;
  margin: auto;
`;
const CustomLight = styled(Light)`
  max-height: 100px;
`;
const CustomArrow = styled(Arrow)`
  height: 10px;
  width: 20px;
`;
const ModalTitle = styled.h3`
  font-size: 18px;
  color: #323232;
`;
const ModalContent = styled.div`
  font-family: 15px;
  color: #323232;
  margin: auto;
`;
const ModalButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 335px;
  max-height: 55px;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.yellow};
  border: none;
  border-radius: 27.5px;
  font-size: 15px;
  cursor: pointer;
`;
const ModalLink = styled.a`
  color: #323232;
`;
