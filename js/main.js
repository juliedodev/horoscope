document.querySelector('button').addEventListener('click', horoscope)

function horoscope(){
    let day = document.querySelector('#dayIn').value;
    let month = document.querySelector('#monthIn').value;


    if (month == 1 && day >= 20 && day <= 31 || month == 2 && day > 0 && day <= 18) {
        document.querySelector('h3').innerText = 'Aquarius - Amethyst'
        document.querySelector('h2').innerText = 'Amethyst is an Aquarius stone that brings the Aquarius sun sign in touch with their intuition and spiritual guidance. By doing so, it helps Aquarians determine the best course of action as they move into their new future. It also helps to reduce the stress that comes along with their need to change the world, and it gives them patience as they wait for others to catch up to their big ideas'
        document.querySelector('.signImage').src = 'images/amethyst.jpg'

    } else if (month == 2 && day >= 19 && day <= 29 || month == 3 && day > 0 && day <= 20){
        document.querySelector('h3').innerText = 'Pisces - Aquamarine'
        document.querySelector('h2').innerText = 'A special birthstones for Pisces is aquamarine. This mineral is valued by people for many centuries due to its crystal clearness and a beautiful blue hue. In ancient times, it was used not only for decorative purposes, but also as a talisman. For example, Roman and Greek sailors believed that aquamarine was sent to people by Poseidon, and therefore it was necessary to have it on the ship for a favorable voyage. Translated from Latin, the name of the mineral means "sea water". Also in the ancient world, aquamarine was widely used to create statuettes of reigning persons. Now among jewelers, copies of a pale blue shade are most valued. This opinion is based solely on the aesthetic considerations of the masters.'
        document.querySelector('.signImage').src = 'images/aquamarine.jpg'

    } else if (month == 3 && day >= 21 && day <= 31 || month == 4 && day > 0 && day <=19){
        document.querySelector('h3').innerText = 'Aries - Diamond'
        document.querySelector('h2').innerText = 'The Aries birthstone is the Diamond. The Diamond is a solid form of carbon and is one of the most sought-after gemstones in the world. The diamond means clarity, truth, and vision. Those born between March 20th to April 21st are Aries.'
        document.querySelector('.signImage').src = 'images/diamond.jpg'

    } else if (month == 4 && day >= 20 && day <= 30 || month == 5 && day > 0 && day <=20){
        document.querySelector('h3').innerText = 'Taurus - Emerald'
        document.querySelector('h2').innerText = 'The lucky stone of the Taurus zodiac sign natives is emerald as the ruling planet of this zodiac sign in Venus. ... The specific colour and crystalline nature of this gemstone helps harvest the energies of the planet Venus and bestow prosperity and luck on the life of the Taurus native. Emerald symbolizes love and wisdom'
        document.querySelector('.signImage').src = 'images/emerald.jpg'

    } else if (month == 5 && day >= 21 && day <= 31 || month == 6 && day > 0 && day <=20){
        document.querySelector('h3').innerText = 'Gemini - Pearl'
        document.querySelector('h2').innerText = 'The pearl is the traditional birthstone for the month of June, though recent years have added the alexandrite as well as the moonstone. As the dominant sign of June is the Gemini – a notoriously flighty air sign – and the pearl is often associated with the following water sign, Cancer, it might seem strange that the pearl be related to the Gemini. However, upon closer inspection the dualistic nature of both creates a bridge that bonds this Zodiac sign and birthstone.'
        document.querySelector('.signImage').src = 'images/pearl.jpg'

    } else if (month == 6 && day >= 21 && day <= 30 || month == 7 && day > 0 && day <= 22){
        document.querySelector('h3').innerText = 'Cancer - Ruby'
        document.querySelector('h2').innerText = 'The deep red glow of the Ruby Stone is one of the traditional birthstones associated with the zodiac sign of Cancer. The Ruby is also ruled by the Sun (and Cancer is ruled by the Moon) and because of this close cosmic connection, Ruby is able to harness the powers of the planet and to bring balance to the life of a Cancer. As the birthstone of Cancer, the Ruby is also known for balancing the heart and bringing confidence, added extras that are sure to help the (sometimes) co-dependent Cancers to stand firm on their own two feet'
        document.querySelector('.signImage').src = 'images/ruby.jpg'

    } else if (month == 7 && day >= 23 && day <= 31 || month == 8 && day > 0 && day <= 22){
        document.querySelector('h3').innerText = 'Leo - Peridot'
        document.querySelector('h2').innerText = 'The golden green soft glow of Peridot acts as a wisdom light for the Leo individual. Divinity and humility are the principal notes for meditation for the native of this zodiac sign. The principal task of slaying the lion that is resides and marks the self is a rather long and arduos process. It involves a vigorous conflict that lead to an understanding that it is love that happens to be the ultimate fulfilling law of life.'
        document.querySelector('.signImage').src = 'images/peridot.jpg'

    } else if (month == 8 && day >= 23 && day <= 31 || month == 9 && day > 0 && day <=22){
        document.querySelector('h3').innerText = 'Virgo - Sapphire'
        document.querySelector('h2').innerText = 'Since the ruling planet of Virgo zodiac sign is Mercury, the most suitable lucky gemstone for the Virgo natives is sapphire. ... The rays of this powerful gemstone help enhance the intelligence and wisdom of the Virgo natives. Sapphire helps improve the power of the inner heart'
        document.querySelector('.signImage').src = 'images/sapphire.jpg'

    } else if (month == 9 && day >=23 && day <= 30 || month == 10 && day > 0 && day <=22){
        document.querySelector('h3').innerText = 'Libra - Opal'
        document.querySelector('h2').innerText = 'Opal is one of four powerful gemstones that support Libras. As a zodiac crystal, opal enhances Libra strengths, particularly their commitment to equity and teamwork. For Libras, fire opal with its orange-to-red body color, provides the most benefits. However, all opals support this air elemental zodiac sign'
        document.querySelector('.signImage').src = 'images/opal.png'

    } else if (month == 10 && day >= 23 && day <= 31 || month == 11 && day > 0 && day <= 21){
        document.querySelector('h3').innerText = 'Scorpio - Topaz'
        document.querySelector('h2').innerText = 'The Scorpio birthstone is Topaz. Topaz comes in many shades but the Yellow Topaz is best for those who share the Scorpio star sign. Topaz means empathy and serenity. Scorpios are born between October 23rd and November 22nd.'
        document.querySelector('.signImage').src = 'images/topaz.jpg'

    } else if (month == 11 && day >= 22 && day <= 30 || month == 12 && day > 0 && day <=21){
        document.querySelector('h3').innerText = 'Sagittarius - Zircon'
        document.querySelector('h2').innerText = 'Sagittarius personalities are positive, think critically and are known for their honesty. They are caring towards their friends and loved ones, are broad-minded and always find a way to help those in need. The Zircon gemstones are said to positively impact the life of a Sagittarius, both financially as well as physically.'
        document.querySelector('.signImage').src = 'images/zircon.jpg'

    } else if (month == 12 && day >= 22 && day <= 31 || month == 1 && day > 0 && day <= 19){
        document.querySelector('h3').innerText = 'Capricorn - Garnet'
        document.querySelector('h2').innerText = 'The Capricorn birthstone is the Garnet. The Garnet is a precious red gemstone. Garnet meaning is commitment and creativity. ... The Capricorn element is earth, the ruling planet is Saturn, and the symbol is the sea-goat.'
        document.querySelector('.signImage').src = 'images/garnet.jpg'

    }   else {
        document.querySelector('h2').innerText = "Pleaese Use Valid Birth Dates";
    }
}
