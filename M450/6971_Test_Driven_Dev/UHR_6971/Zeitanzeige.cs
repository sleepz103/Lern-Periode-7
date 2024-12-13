using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;
[assembly: InternalsVisibleTo("UHR_6971Test")]


namespace UHR_6971
{
    internal abstract class Zeitanzeige
    {
        public int Stunden { get; }
        public int Minuten { get; }

        public Zeitanzeige(int stunden, int minuten)
        {
            Stunden = stunden;
            Minuten = minuten;
        }

        public abstract string Anzeigen();   

    }
}
