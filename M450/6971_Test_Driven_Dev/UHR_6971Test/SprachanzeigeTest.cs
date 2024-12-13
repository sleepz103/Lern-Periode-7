using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using UHR_6971;

namespace UHR_6971Test
{
    [TestClass]
    public class SprachanzeigeTest
    {
        [TestMethod]
        public void Sprachanzeige_Minuten00_GibtGenauAn()
        {
            // Assemble
            int stunden = 4;
            int minuten = 0;
            Sprachanzeige SprachUhr = new Sprachanzeige(stunden, minuten); 

            string expected = "Genau 4 Uhr";

            // Act & Assert
            Assert.AreEqual(expected, SprachUhr.Anzeigen());
        }

        [TestMethod]
        public void Sprachanzeige_Minuten15_GibtViertelAn()
        {
            // Assemble
            int stunden = 8;
            int minuten = 15;
            Sprachanzeige SprachUhr = new Sprachanzeige(stunden, minuten);

            string expected = "Viertel nach 8";

            // Act & Assert
            Assert.AreEqual(expected, SprachUhr.Anzeigen());
        }

        [TestMethod]
        public void Sprachanzeige_Minuten30_GibtHalbAn()
        {
            // Assemble
            int stunden = 21;
            int minuten = 30;
            Sprachanzeige SprachUhr = new Sprachanzeige(stunden, minuten);

            string expected = "Halb 10";

            // Act & Assert
            Assert.AreEqual(expected, SprachUhr.Anzeigen());
        }

        [TestMethod]
        public void Sprachanzeige_AndereMinuten_GibtDieseAn()
        {
            // Assemble
            int stunden = 23;
            int minuten = 13;
            Sprachanzeige SprachUhr = new Sprachanzeige(stunden, minuten);

            string expected = "13 nach 11";

            // Act & Assert
            Assert.AreEqual(expected, SprachUhr.Anzeigen());
        }
    }
}