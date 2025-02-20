 << 1º Versão >>
 ###############

Importando as bibliotecas necessárias 
=======================================
import React from "react"; // <= Importa a biblioteca principal do React para criar componentes.
import { NavigationContainer } from "@react-navigation/native"; // <= Importa o componente NavigationContainer do react-navigation para criar a navegação (embora não esteja sendo usado diretamente aqui).
import { createStackNavigator } from "@react-navigation/stack"; // <= Importa o componente createStackNavigator do react-navigation para criar a navegação em pilha (transições entre telas com gestos e header).

=================================================================================================================================================================================================================================

 importando as telas 
======================

// ANOTAÇÃO => Importa todos os componentes de tela do aplicativo usando alias @ que normalmente aponta para o diretório src/
import Splash from "@/screens/splash";
import Home from "@/screens/home";
import Login from "@/screens/login";
import Sacola from "@/screens/sacola";
import SacolaCheckout from "@/screens/sacolaCheckout";
import RecuperarSenha from "@/screens/recuperarSenha";
import Lancamento from "@/screens/lancamento";
import Cupom from "@/screens/cupom";
import Outlet from "@/screens/outlet";
import Categoria from "@/screens/categoria";
import Cabelos from "@/screens/cabelos";
import Maquiagem from "@/screens/maquiagem";
import Perfume from "@/screens/perfume";
import SkinCare from "@/screens/skinCare";
import Unha from "@/screens/unha";
import CorpoEBanho from "@/screens/corpoEBanho";
import Ajuda from "@/screens/ajuda";
import Cadastro from "@/screens/cadastro";
import Politica from "@/screens/politica";
import PaginaErro from "@/screens/paginaErro";
import Entregas from "@/screens/entregas";
import Trocas from "@/screens/trocas";
import Pedidos from "@/screens/pedidos";
import Estorno from "@/screens/estorno";

=================================================================================================================================================================================================================================

<< Criando a navegação >> 
=========================

const Stack = createStackNavigator(); <= Cria uma instância do navegador em pilha que será usado para gerenciar as rotas;



<< Criando as rotas para as telas no componente principal >> 
============================================================
  -----------------------------------------------------------------------------------------------------------------------------------------------------
   DESCRIÇÃO da tipagem React.FC :
    => O tipo React.FC é uma forma de tipar componentes que retornam JSX.
    => Ele é uma abreviação para Function Component, ou seja, é uma forma simples e direta de definir um componente funcional.

    VANTAGENS de utilizar o React.FC :
    => Ele já inclui algumas propriedades padrão, como children, que é uma propriedade implícita que representa o conteúdo entre as tags do componente.
    => Ele  tipar o retorno da função.

    OBS :
    => O uso do React.FC não é obrigatório.
    => Ele é substituido pelas interfaces para tipar as props.
    -----------------------------------------------------------------------------------------------------------------------------------------------------
const App: React.FC = () => {
  return (
    <NavigationContainer>
      DESCRIÇÃO: 
      O que é o <NavigationContainer> 
        => É um componente wrapper (envoltório) que deve envolver toda a estrutura de navegação do seu aplicativo;
        => É responsável por gerenciar o estado global de navegação e fornecer o contexto necessário para todos os componentes de navegação;
        ------------------------------------------------------------------------------------------------------------------------------------------------
      Para que serve o <NavigationContainer> 
        => Gerenciamento de Estado de Navegação:
            -> Mantém o rastreamento da pilha de telas, parâmetros de rota e histórico de navegação;
        => Linking Configuration:
            -> Permite configurar deep links (links que abrem telas específicas do app);
        => Theming:
            -> Permite definir temas globais para a navegação (cores do header, fontes, etc.);
        => Error Handling:
            -> Fornece tratamento de erros básico para navegação;
        => Integração com Ambiente Nativo:
            -> Conecta a navegação JavaScript com os componentes nativos subjacentes;
      
      
      <Stack.Navigator initialRouteName="Splash">
    ---------------------------------------------------------------------------------------------------------    
      DESCRIÇÃO:<Stack.Navigator> => Define o componente principal do aplicativo que retorna o sistema de navegação.
        initialRouteName="Splash" => Define que a primeira tela a ser carregada será a Splash Screen.
    ----------------------------------------------------------------------------------------------------------  
        <Stack.Screen name="Splash" component={Splash} /> <= Registra a tela de Splash Screen (tela inicial de carregamento);
        <Stack.Screen name="Home" component={Home} /> <= Vai até a tela principal do aplicativo após o carregamento inicial;
        <Stack.Screen name="Lancamento" component={Lancamento} />
        <Stack.Screen name="Cupom" component={Cupom} />
        <Stack.Screen name="Outlet" component={Outlet} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="Sacola" component={Sacola} />
        <Stack.Screen name="SacolaCheckout" component={SacolaCheckout} />
        <Stack.Screen name="PaginaErro" component={PaginaErro} />
        <Stack.Screen name="Categoria" component={Categoria} />
        <Stack.Screen name="Ajuda" component={Ajuda} />
        <Stack.Screen name="Politica" component={Politica} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Entregas" component={Entregas} />
        <Stack.Screen name="Trocas" component={Trocas} />
        <Stack.Screen name="Pedidos" component={Pedidos} />
        <Stack.Screen name="Estorno" component={Estorno} />

    << Telas específicas de categorias de produtos (provavelmente subcategorias da tela principal de categorias) >>
    ================================================================================================================
        <Stack.Screen name="Cabelos" component={Cabelos} />
        <Stack.Screen name="Maquiagem" component={Maquiagem} />
        <Stack.Screen name="Perfume" component={Perfume} />
        <Stack.Screen name="SkinCare" component={SkinCare} />
        <Stack.Screen name="Unha" component={Unha} />
        <Stack.Screen name="CorpoEBanho" component={CorpoEBanho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


##########################################################################################################
##########################################################################################################











<< 2º Versão >>
###############
1°) PASSO : Criar uma pasta chamada (src) e crie um arquivo chamado (App.tsx);
=> (App.tsx) : Serve para criar e gerenciar as rotas;

Importando as bibliotecas necessárias 
=======================================
import React from "react"; // <= Importa a biblioteca principal do React para criar componentes.
import { createStackNavigator } from "@react-navigation/stack"; // <= Importa o componente createStackNavigator do react-navigation para criar a navegação em pilha (transições entre telas com gestos e header).

=================================================================================================================================================================================================================================

 importando as telas 
======================

import Splash from "@/screens/splash";
import Home from "@/screens/home";
import Login from "@/screens/login";
import Sacola from "@/screens/sacola";
import SacolaCheckout from "@/screens/sacolaCheckout";
import RecuperarSenha from "@/screens/recuperarSenha";
import Lancamento from "@/screens/lancamento";
import Cupom from "@/screens/cupom";
import Outlet from "@/screens/outlet";
import Categoria from "@/screens/categoria";
import Cabelos from "@/screens/cabelos";
import Maquiagem from "@/screens/maquiagem";
import Perfume from "@/screens/perfume";
import SkinCare from "@/screens/skinCare";
import Unha from "@/screens/unha";
import CorpoEBanho from "@/screens/corpoEBanho";
import Ajuda from "@/screens/ajuda";
import Cadastro from "@/screens/cadastro";
import Politica from "@/screens/politica";
import PaginaErro from "@/screens/paginaErro";
import Entregas from "@/screens/entregas";
import Trocas from "@/screens/trocas";
import Pedidos from "@/screens/pedidos";
import Estorno from "@/screens/estorno";

=================================================================================================================================================================================================================================

<< Criando a navegação >> 
=========================
const Stack = createStackNavigator(); <= Cria uma instância do navegador em pilha que será usado para gerenciar as rotas;



<< Criando as rotas para as telas >> 
====================================
const App = () => {
  return (
      <Stack.Navigator initialRouteName="Splash">    
        <Stack.Screen name="Splash" component={Splash} /> 
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Lancamento" component={Lancamento} />
        <Stack.Screen name="Cupom" component={Cupom} />
        <Stack.Screen name="Outlet" component={Outlet} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="Sacola" component={Sacola} />
        <Stack.Screen name="SacolaCheckout" component={SacolaCheckout} />
        <Stack.Screen name="PaginaErro" component={PaginaErro} />
        <Stack.Screen name="Categoria" component={Categoria} />
        <Stack.Screen name="Ajuda" component={Ajuda} />
        <Stack.Screen name="Politica" component={Politica} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Entregas" component={Entregas} />
        <Stack.Screen name="Trocas" component={Trocas} />
        <Stack.Screen name="Pedidos" component={Pedidos} />
        <Stack.Screen name="Estorno" component={Estorno} />

    << Telas específicas de categorias de produtos (provavelmente subcategorias da tela principal de categorias) >>
    ================================================================================================================
        <Stack.Screen name="Cabelos" component={Cabelos} />
        <Stack.Screen name="Maquiagem" component={Maquiagem} />
        <Stack.Screen name="Perfume" component={Perfume} />
        <Stack.Screen name="SkinCare" component={SkinCare} />
        <Stack.Screen name="Unha" component={Unha} />
        <Stack.Screen name="CorpoEBanho" component={CorpoEBanho} />
      </Stack.Navigator>
    
  );
};
export default App;



=========================================================================================================================
=========================================================================================================================
2º)PASSO : No arquivo raiz chamado index.tsx coloque este código;
=> Ele importa o componente App.tsx que contém apenas a configuração de navegação  


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App from './App'; // Importação do componente App

const Root = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default Root; // Exporte o Root como padrão

##########################################################################################################
##########################################################################################################

ANOTAÇÕES: 

>> Por Que Fazer a 2º Versão;
------------------------------

Separação Limpa:
  -> index.tsx = Infraestrutura (NavigationContainer, Providers)

  -> App.tsx = Lógica de navegação pura
------------------------------------------------------------------------------

Flexibilidade Futura:
  -> Se precisar adicionar Redux, Context API ou outros providers:

EXEMPLO:
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
// index.tsx modificado
const Root = () => (
  <ReduxProvider>
    <ThemeProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </ThemeProvider>
  </ReduxProvider>
);¨
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨

------------------------------------------------------------------------------

Testabilidade:
  -> Facilita testar o componente App isoladamente;
  ------------------------------------------------------------------------------