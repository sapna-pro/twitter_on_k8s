using System;
using System.IO;

namespace rsapi
{
    public class Song
    {
        public string Miracle { get; set; }
        public string Song2 { get; set; }

        public Song()
        {
            if (File.Exists("song.txt")) {
                Miracle = File.ReadAllText("song.txt");
            } else {
                Miracle = "??";
            }
        }

        public String SongBM(){
            if (File.Exists("song2.txt")) {
                return File.ReadAllText("song2.txt");
            } else {
                return "??";
            }
        }

        public String FFA(){
            if (File.Exists("song3.txt")) {
                return File.ReadAllText("song3.txt");
            } else {
                return "??";
            }
        }
    }
}