package projects;
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;
import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.UnsupportedAudioFileException;

public class Music {
    
    public static void main(String[] args) throws IOException{
        String filePath = "C:\\Users\\vijay\\OneDrive\\Attachments\\.vscode\\projects\\Raining Tacos.wav";
        File file = new File(filePath);
        try (Scanner scanner = new Scanner(System.in);
         AudioInputStream audiostr = AudioSystem.getAudioInputStream(file)) {

            Clip clip = AudioSystem.getClip();
            clip.open(audiostr);


            String music = "";

            while(!(music.equals("X"))){
                System.out.println("Click S ----> start");
                System.out.println("Click X ----> Stop");
                System.out.println("Click R  ----> Restart music");
                System.out.println("Click P -----> pause");

                music = scanner.nextLine().toUpperCase();
                
                switch (music){
                case "S" -> clip.start();
                case "X" -> clip.close();
                case "R" -> clip.setMicrosecondPosition(0);
                case "P" -> clip.stop();
                default -> System.out.println("Invaid Choice");

                }

            }

        }
        catch(UnsupportedAudioFileException e){
            System.out.println("Audio file not supported");
        }
        catch(LineUnavailableException e){
            System.out.println("didn’t find an available line to play the audio");
            
        }
        catch(NullPointerException e){
            System.out.println("Path does not exist");
        }
    }

    
    
}
