import java.util.Scanner;

class Classificador {

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Digite 0 para sair ou digite 1 para continuar: ");
            String continuar = scanner.nextLine();

            if(continuar.equals("0")){
                break;
            } else{
                System.out.print("Digite o nome do herói: ");
                String nome = scanner.nextLine();

                System.out.print("Digite a quantidade de XP: ");
                int xp = Integer.parseInt(scanner.nextLine());

                String rank;

                if (xp >= 10001){
                    rank= "Radiante";
                } else if (xp >= 9001){
                    rank= "Imortal";
                } else if (xp >= 8001){
                    rank= "Ascendente";
               } else if (xp >= 7001){
                    rank= "Platina";
               } else if (xp >= 5001){
                    rank= "Ouro";
               } else if (xp >= 2001){
                    rank= "Prata";
               } else if (xp >= 1001){
                    rank= "Bronze";
                } else{
                    rank= "Ferro";
                };
                System.out.print("O Herói de nome "+ nome +" está no nível de " + rank +"\n");
            }
        } 
        scanner.close();
    }
}