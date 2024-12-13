using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;
[assembly: InternalsVisibleTo("UHR_6971Test")]

namespace UHR_6971
{
    internal class Sprachanzeige : ZwoelfStundenAnzeige
    {
        public Sprachanzeige(int stunden, int minuten) : base(stunden, minuten)
        {
            
        }

        public string Anzeigen()
        {
            return "a";
        }
    }
}
