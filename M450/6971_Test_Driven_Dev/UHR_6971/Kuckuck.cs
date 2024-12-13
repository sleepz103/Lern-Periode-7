using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UHR_6971
{
    internal class Kuckuck : ZwoelfStundenAnzeige
    {
        public Kuckuck(int stunden, int minuten) : base(stunden, minuten)
        {
            
        }

        public string Anzeigen()
        {
            return "a";
        }
    }
}
