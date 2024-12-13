using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace UHR_6971
{
    internal class AmerikanischeAnzeige : ZwoelfStundenAnzeige
    {
        public AmerikanischeAnzeige(int stunden, int minuten) : base(stunden, minuten)
        {
        
        }

        public string Anzeigen()
        {
            return "a";
        }

        public int GetNaechsteStunde()
        {
            return 1;
        }

        public bool IsAM()
        {
            bool IsMorning = false;
            if (Stunden > 0 && Stunden < 13)
            {
                IsMorning = true;
            }
            Console.WriteLine(IsAM);
            return IsMorning;
        }
    }
}
