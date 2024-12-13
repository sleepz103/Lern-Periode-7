using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UHR_6971
{
    internal class Balkenanzeige : Zeitanzeige
    {
        public Balkenanzeige(int stunden, int minuten) : base(stunden, minuten)
        {

        }

        public override string Anzeigen()
        {
            string timeInStars = "";
            for (int i = 0; i < Stunden; i++)
            {
                timeInStars += "*";
            }
            timeInStars += " : ";
            for (int i = 0; i < Minuten; i++)
            {
                timeInStars += "*";
            }

            return timeInStars;
        }
    }
}
