using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;
[assembly: InternalsVisibleTo("DeutschAnzeige")]

namespace UHR_6971
{
    internal class DeutscheAnzeige : Zeitanzeige
    {
        public DeutscheAnzeige(int stunden, int minuten) : base(stunden,minuten)
        {

        }

        public override string Anzeigen()
        {
            string time = $"{Stunden}:{Minuten}";
            return time;
        }
    }
}
