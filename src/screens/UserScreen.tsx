import { useContext } from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamlist } from "../../App";

import { UserContext } from "../contexts/userContext";

type UserScreenProps = {
  route: RouteProp<RootStackParamlist, "User">;
};

export default function UserScreen({ route }: UserScreenProps) {
  const { username } = route.params;
  const userContext = useContext(UserContext);

  const nomeDinamico = userContext?.loginName || "Nenhum nome Salvo";
  const nomeEstatico = userContext?.nome || "Nenhum nome fornecido";

  return (
    <View>
      <Text style={{ fontSize: 32 }}>Nome Estatico: {nomeEstatico} </Text>
      <Text style={{ fontSize: 32 }}>Nome Da Rota: {username} </Text>
      <Text style={{ fontSize: 32 }}>Nome Dinâmico: {nomeDinamico} </Text>
    </View>
  );
}
