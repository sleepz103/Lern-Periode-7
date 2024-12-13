using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using UHR_6971;

namespace UHR_6971Test
{
    [TestClass]
    public class DeutschAnzeigeTest
    {
        [TestMethod]
        public void DeutscheAnzeige_Variablen_DargestelltInZeitForm()
        {
            // Assemble
            int stunden = 13;
            int minuten = 55;

            string expected = "13:55";
            // Act
            DeutscheAnzeige Uhr = new DeutscheAnzeige(stunden, minuten);
            // Assert
            Assert.AreEqual(expected, Uhr.Anzeigen());
        }
    }
}