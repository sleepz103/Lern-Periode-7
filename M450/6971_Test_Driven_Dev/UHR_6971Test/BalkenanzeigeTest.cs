using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using UHR_6971;

namespace UHR_6971Test
{
    [TestClass]
    public class BalkenanzeigeTest
    {
        [TestMethod]
        public void Balkenanzeige_Zeit_GleichAnzahlStaerchenZeigen()
        {
            int stunden = 7;
            int minuten = 9;

            string expected = "******* : *********";
            // Act
            Balkenanzeige StaerchenUhr = new Balkenanzeige(stunden, minuten);
            // Assert
            Assert.AreEqual(expected, StaerchenUhr.Anzeigen());
        }
    }
}