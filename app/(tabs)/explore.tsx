<< 1º Versão >>
###############


>> Importando a biblioteca necessária 
======================================
import { StyleSheet, Image, Platform } from "react-native";

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Impordando os arquivos da pasta "@/components/" & "@/components/ui":
====================================================================
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

------------------------------------------------------------------------------------------------------------------------------------------------------------------


>> Definindo o componente funcional (TabTwoScreen), que será exportado como padrão;
===================================================================================
export default function TabTwoScreen() {
  return ( => *(Criando as Tags dos arquivos importados da pasta "@/components/" & "@/components/ui")*
    
    <ParallaxScrollView 
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>

      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>

      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          and{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{" "}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <ThemedText type="defaultSemiBold">w</ThemedText>{" "}
          in the terminal running this project.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the{" "}
          <ThemedText type="defaultSemiBold">@2x</ThemedText> and{" "}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
          provide files for different screen densities
        </ThemedText>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>{" "}
          to see how to load{" "}
          <ThemedText style={{ fontFamily: "SpaceMono" }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{" "}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook
          lets you inspect what the user's current color scheme is, and so you
          can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{" "}
          <ThemedText type="defaultSemiBold">
            components/HelloWave.tsx
          </ThemedText>{" "}
          component uses the powerful{" "}
          <ThemedText type="defaultSemiBold">
            react-native-reanimated
          </ThemedText>{" "}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The{" "}
              <ThemedText type="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </ThemedText>{" "}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>

    </ParallaxScrollView>
  );
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------


const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

############################################################################################################################################################################################################################################################################################################################################################################################

---------------
function
<Note>
 DESCRIÇÃO do CÓDIGO: 
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨

(import):
 == { StyleSheet } : *( É usado para criar estilos em React Native. )*;  
 == { Image } : *( Componente para exibir imagens. )*;
 == { Platform } : *( Permite detectar a plataforma (iOS, Android, etc.) para aplicar comportamentos específicos. )*; 


 => { Collapsible }: É um componente que permite (expandir/recolher) as seções de conteúdo;
 => { ExternalLink }: Um componente que abre links externos;
 => { ParallaxScrollView }: Um componente que cria um efeito de parallax ao rolar a tela;
 => { ThemedText }: Um componente de texto que aplica temas (light/dark);
 => { ThemedView }: Um componente de view que aplica temas (light/dark);
 => { IconSymbol }: Um componente que exibe ícones;

>> ANOTAÇÃO; 
¨¨¨¨¨¨¨¨¨¨¨¨¨
=> Ao importar um componente com import você está trazendo a definição do componente para o arquivo atual;



< ParallaxScrollView ></ ParallaxScrollView >
Type:
 => <TAG PRINCIPAL> DO COMPONENT { ParallaxScrollView };

Function: 
  => *( Ela envolve o conteúdo da tela e criar um efeito de rolagem em parallax, onde o fundo se move a uma velocidade diferente do conteúdo em primeiro plano. Isso proporciona uma experiência visual dinâmica e envolvente. )*;

Props:
 >> headerBackgroundColor: 
        Type: Propriedade (Props) da Tag <ParallaxScrollView>;
        Value: Valor da (Props){{light: "#D0D0D0", dark: "#353636"}}

[(1º)Tag] == <   : 
                (Props) == 
                  =>  que contêm :
                    ->  == um objeto como duas propriedades em JSX;
                    Define a cor de fundo do cabeçalho para ter diferentes cores dependendo do tema { claro, escuro } = {{light: "#D0D0D0", dark: "#353636"}} )*;
            SIGNIFICADO das {{light: "#D0D0D0", dark: "#353636"}}

                (Props) == headerImage={}: Define a imagem que será exibida na área do cabeçalho passando o componente da página={IconSymbol} como imagem do cabeçalho;
    [(1º)Tag] == <IconSymbol  Tag que exibe ícones;
                    == size={310}: Define o tamanho da imagem do ícone;
                    == color="#808080": Define a cor do ícone;
                    == name="chevron.left.forwardslash.chevron.right": Define o nome do ícone;
                    == style={styles.headerImage}: Define o estilo da imagem do ícone;
                />

    [(1°)Tag] == <<ThemedView>: Um container com tema aplicado e conteúdo;
                    == style={styles.titleContainer}: Aplica o estilo titleContainer definido no StyleSheet;
                    == <ThemedText>: Exibe o texto "Explore" com o type de estilo "title";
                  </ThemedView>

    [(2º)Tag] == <ThemedText> 
                    == Exibe um texto explicativo sobre o propósito do aplicativo;
                  </ThemedText>

    [(1º)Tag] == <Collapsible title="File-based routing"> == * Um componente que permite expandir e minimizar conteúdo *;
                             [(3º)Tag] == <ThemedText> : Exibe o texto
                                            (conteúdo) == This app has two screens:{" "} : Explica que o aplicativo tem duas telas;
                                    
                                          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
                  and{" "}
                  <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
                </ThemedText>
                <ThemedText>
                  The layout file in{" "}
                  <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{" "}
                  sets up the tab navigator.
                </ThemedText>
                <ExternalLink href="https://docs.expo.dev/router/introduction">
                  <ThemedText type="link">Learn more</ThemedText>
                </ExternalLink>
              </Collapsible>
          />
         
          
</Note>
-------------
############################################################################################################################################################################################################################################################################################################################################################################################




















