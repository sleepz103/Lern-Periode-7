using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using UHR_6971;

namespace UHR_6971Test
{
    [TestClass]
    public class KuckuckTest
    {
        [TestMethod]
        public void Kuckuck_VolleStunde_EinKuckuck()
        {
            // Assemble
            int stunden = 4;
            int minuten = 0;

            string expected = "*kuckuck* *kuckuck* *kuckuck* *kuckuck*";
            // Act
            Kuckuck kuckuckUhr = new Kuckuck(stunden, minuten);
            // Assert
            Assert.AreEqual(expected, kuckuckUhr.Anzeigen());
        }
        
        [TestMethod]
        public void Kuckuck_NichtVolleStunde_KeinKuckuck()
        {
            // Assemble
            int stunden = 12;
            int minuten = 22;

            string expected = "";
            // Act
            Kuckuck kuckuckUhr = new Kuckuck(stunden, minuten);
            // Assert
            Assert.AreEqual(expected, kuckuckUhr.Anzeigen());
        }
    }
}