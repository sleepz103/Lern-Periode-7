using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;
[assembly: InternalsVisibleTo("UHR_6971")]

namespace UHR_6971
{
    internal abstract class ZwoelfStundenAnzeige
    {
        public int Stunden { get; }

        public ZwoelfStundenAnzeige(int stunden, int minuten)
        {

        }

        public int getNaechsteStunde()
        {
            return 1;
        }

        public bool isAM()
        {
            return false;
        }
    }
}
