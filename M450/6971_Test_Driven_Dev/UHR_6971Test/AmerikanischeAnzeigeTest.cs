using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using UHR_6971;

namespace UHR_6971Test
{
    [TestClass]
    public class AmerikanischeAnzeigeTest
    {
        [TestMethod]
        public void ZwoelfStundenAnzeige_GibtTrueZurueck_WennMorgenIst()
        {
            // Assemble
            int stunden = 01;
            int minuten = 00;

            bool expected = true;
            // Act
            AmerikanischeAnzeige amerikanischeUhr = new AmerikanischeAnzeige(stunden, minuten);
            // Assert
            Assert.AreEqual(expected, amerikanischeUhr.IsAM());
        }

        [TestMethod]
        public void ZwoelfStundenAnzeige_MitZeit_KannNaechsteStundeZeigen()
        {
            // Assemble
            int stunden = 3;
            int minuten = 0;
            AmerikanischeAnzeige amerikanischeUhr = new AmerikanischeAnzeige(stunden, minuten);

            int expected = 4;

            // Act & Assert
            Assert.AreEqual(expected, amerikanischeUhr.GetNaechsteStunde());
        }


        [TestMethod]
        public void AmerikanischeAnzeige_ZeitKleinerAls13_AendertNicht()
        {
            // Assemble
            int stunden = 07;
            int minuten = 08;

            string expected = "01:00 AM";
            // Act
            AmerikanischeAnzeige amerikanischeUhr = new AmerikanischeAnzeige(stunden, minuten);
            // Assert
            Assert.AreEqual(expected, amerikanischeUhr.Anzeigen());
        }

        [TestMethod]
        public void AmerikanischeAnzeige_ZeitGroesserAls1259_WirdIns12StundenNotationUebersetzt()
        {
            // Assemble
            int stunden = 13;
            int minuten = 08;

            string expected = "01:08 PM";
            // Act
            AmerikanischeAnzeige amerikanischeUhr = new AmerikanischeAnzeige(stunden, minuten);
            // Assert
            Assert.AreEqual(expected, amerikanischeUhr.Anzeigen());
        }

    }
}