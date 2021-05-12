import React , {useState} from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SlideView = () => {
    const [slide, setSlide] = useState(['<div class="se-component se-image-container __se__float-none" contenteditable="false"><figure style="margin: 0px;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAFyCAYAAADoJFEJAAAWlklEQVR4nO3d23bjuA5FUcWj// X00 pqiS kBYoLIBrPp3h0uHNFKzI2u2Pz8/Pz OBj4 PR//UwpOpSypm53r1ca Qd1 Qn64u6D/X91H/9ONGOQ/W KJlzfdRu93dW7dvhXy3Bfnpio3/aI1/9k0/bpTzOHfcqOj2ovtdMT7r1d 1u339j90X5TjWr8Gz9v/9N/pxo5zHueNGRbcX3e K8Vmvvq/B7clxkqQCbsfhp9u/XAuJzXP0r6 18Ipckor7OI7DZ/DuWPUlEf3Lvy5fEnaZx6hdvuz0avw r8gvdm/jVnxtFGnMFecxKrq96H6zxrcLr8gfcJNJPF6R3/dfRCO0ouebLemRjvXqVCGnLciXr3FRC/puCcHd2uui27pQxx9Rr966tUJdkEfeWaBuX3aOsr1z7XVBXRfSubzKO3Oc/rKz2qIcB2fMuyUEd2uvi07rQjn3Z7wzZp9akaTipgp5xU 3L5XHLmle5XN duxekUtSccOFvPKn25fsOTzr/99/iz5ulO2da6 LDutSZZzPzMzBK/KL7ZYQ3K29LlyXWoYfP zyJo5 695lvlInu52/o/MNSXaOOvvoUpc3RxJfpXp1SSGPevb0qx1qQc/ 7cKrdflNTHrSdhR9X9HH96VivVp6j/zj42NJgGBVu2fcG8 Z1 ii5xG9fvTXotH3FX18x1G7Xi0r5FmbN0PmbxdmyEpYdjkuGn1f0cd3HPXrlU tSFJxSwr5lZ ylE90STV1qFdekUtSceGFPOMKOfuqPCuJmSUrYdnluGj0fUUeX5d65RV5kN1 u7DLb2LSk7aj6PuKPr7qwpOdWVfH0eNzk0k80edvl3rlFbkkFXdpRL87etIxC30eWeNzvqx9WplX5EHoSccs9Hlkjc/5svZpdRbyAPSkYxb6PLLG53zPtaffLOSSVJyFXJKKs5BLUnEW8gD0pGMW jy6/DZqdL9d5rsTC3kQetIxC30eXX4bNbrfLvPdhcnOk 1Juo7Jzvu8Ipek4kx2BuqS1KMfN6pLktB56BWvyIN0SerRXxvVJUnoPDQivJBnfMpmf7J3SerRjxvVJUnoPNbrUq 8Ipek4pYU8is/5bKvxiXV1qFeeUUuScUtK RZ4YYMXZJ69ONGdUkSOo/rVK9XS6/IPz8/lwx VbtndEnq0V8b1SVJ6DyuU7lehSc7n3Z28hvqK8dA22SSrj1/K9WrSwNBFkdJVVSqVyY7A3VJdkbrkuykt5eFvv924FMrQbokO6N1SXbS28tC33 7GC7kHRZ91Ry6JDujdUl20tvLQt5/ldbxkZk5eEUuScVNFfLKn3KVxy5pXuVzfnbsXpFLUnHThbzip9zqMXdJdkbrkuykt5eFvv OY596NRwIuoe 6c68ie/MbbfH 0b5 OE17WW58v29 py 0qmnoI4ThfwLbYEiPoVpc5LU89yOmFNIIKjiny S9tSxXpnsDET/09v2bK9Te/rLp1aC0JN/tmd7ndrTdzc/FX bXRN68s/2bK9Le9ar3z4/P70il6Tqbsfhp9y/XAuJzXP0r6 18Ipckor7U8j9lHt/DejJP9uzvU7tnfn/dfLvGnx83lmR3b5NjtoU9Me1bM/2OrX3qN3u7q3b3UL 5x bL5Cf6lIfO9erp4VcksRnsjNQ1p i9P8YVlZ7u9lt/ kvn1oJkpWEy0rMmfxj2W3/6TsLeYCsJFzGbyGu6DdrHl3stv/0m4VckoqzkEtScRZySSrOQh4gKwlH/y3OrPZ2s9v 028W8iD3Nu6ZzTzaXnS/o7Lmq/t223/6zkCQJBXnFbkkFfct2UlPhmUdl4U vlG7JU z9h99v3R5P4j15c8VOT0ZlvVaFvr4Ru2WPM3af/T90uX9oNaX26sOCMmwrOOy0Mc3arfkadb o  XLu8Hub54j1ySirOQS1JxFnJJKu52HPxkWNZxWejjG7Vb8jRr/9H3S5f3g1xfnv74MikZlvVaFvr4Ru2WPM3af/T90uX9oNYXk52SVJz3yCWpuKXJzmjERBWh31H0xCF9/XbjfrmPmMhdluyMRk1UZfc7ip44pK/fbtwv91ETuUuSndHIiarMfkfRE4f09duN 2W 7exErvfIJak4C7kkFWchl6TiliQ7o5ETVZn9jqInDunrtxv3y3zb2YncZcnOaNREVXa/o iJQ/r67cb9ch81kWuyU5KK8x65JBX3VrKTnrwalTVf vrRxzeqS KQvq/o50eXffrsuOlkJz15NSprvvT1o49vVJfEIX1fkc6Fzvv01WtTyU568mpU1nzp60cf36guiUP6vqKfH1326chx3iOXpOIs5JJUnIVckoqbSnbSk1ejsuZLXz/6 EZ1SRzS9xX9/OiyT0eOm0520pNXo7LmS18/ vhGdUkc0vcV6VzovE9fvWayU5KK8x65JBX33 tDfqMnDu23pi7zzUpORqMnRbMQ34/pK3J64tB a oy36zkZDR6UjQL9f2YKuT0xKH91tRlvlnJyWj0pGgW8vvhPXJJKs5CLknFWcglqbipQk5PHNpvTV3mm5WcjEZPimYhvx/TV T0xKH91tRlvlnJyWj0pGgW6vthslOSivMeuSQV91aycxQ9GdYlQdZl/ejtRYteZ/pxo7rMY1TE JZdkdOTYV0SZF3Wj95etOh1pr82ijRmQmJz9LUlhZyeDOuSIOuyfvT2okWvM/24UV3mMSpyfN4jl6TiLOSSVJyFXJKKW1LI6cmwLgmyLutHby9a9DrTjxvVZR6jIse37IqcngzrkiDrsn709qJFrzP9tVGkMRMSm6OvmeyUpOK8Ry5JxX1LdlZONr1z3Kgu/dLnkdVedL/0 bp NW9CDCU7qyebZl8b1aVf jyy2ovulz5f148RCps1lOzskGyaOW5Ul37p88hqL7pf nxdv3PtZTHZKUkbsJBLUnEWckkq7nYcPZJNM8eN6tIvfR5Z7UX3S5 v63euvSxTyc7qyabZ10Z16Zc j6z2ovulz9f1q1XEv5jslKTmvEcuScW9lezcISlF0CXZKRb6vuqSkB4V0d50snOXpFQ2UoqTtC46h7SHSMlO vhemUp27pSUytQl2SkW r7qkpAeFdme98glqTgLuSQV99/rQ6T aLeO/IJZM6aSnTslpTJ1SXaKhb6vuiSkR0W2N53s3CUplY2U4iSti84h7SFSspM vldMdkqHt1ZUm/fItSVa4f7JUJZmvFXIickm24trT71l7Rd6v5XPo nHD6nJJtuLaU 9Ze0Xer/Vz6OpQk5ONtne fbUW9Z offb4TzyHrn0wM8/rauc1NqPyU5JKs5CLknFTRVycrLJ9s63p96y9gu93w7n0VuBIPrjc7ZXY/Nlqna/O/I9pT8GmNVv5fPIZKe2tHMhVz/eI5ek4pYmO/1T6hxvwShT1nnUZZ9euX7Lkp0muc4xAapM1X/DMtvV67ck2WmS6xwToMrU4TcsM2Wsn/fIJak4C7kkFWchl6TiliQ7TXKdYwJUmTr8hmWmjPWbviKn//YjfXyjqL8NqD1U/w3LbFevn8lObanSUxDHUbOY6Tr 98ilQBZcZUAU8t2SXHRd5rEbehKT3i99fM kP7WyW5KLrss8dkNPYtL7pY/vldRCvluSi67LPHZDT2LS 6WPbwTi1orUxTsnvreudFb6rRVJ0jkWckkqLrWQ75bkousyj93Qk5j0funjG4EIBHV53G3nedDnvurLWtI8d3jMbmW/9PE97YtQyFWfhVzK4z1ySSru2 OH9D9Botuj95t1lUu/ulZvu52/Ecf9ubXy6E/Pn42OHjcqqz16v9HjG/Vuv5nFPzOs5IdcrN3O36jjbs8O vlv9N/oo88ja3yjTHYq027nb Rx3iOXpOIs5JJUnP tFS1x78/BiPvJtFs8r8bjPXRd4XYc/ARUdHv0frMSliY7lWm38zfyuNuzg8 8NiqrPXq/0eMbldWvdBz7nb9Rr5nsVIiRWx4db6284umlK3iPXJeJ G 40Iw 7yut9FYh75KoykJMhr1znFjo71uXxGZ0vxHtTT9 eO K48xVyGh70a9lyZpvl/XTffT3LWv/0fuNam qkHdJVGUhJ8NmjhML/X3rktiM7jeyPe RKw2hyESj3c7QHkx2SlJxFnJJKm6qkHdJVGUhJ8NmjhML/X3rktiM7jeyvekr8i6JqiyEFFjEa2Khv29dEpvR/Ua1Z7JTITp cTnC00cE3iOXpOJKPX5IT3zRE2T05J ukbUPPI/WKXNr5dGf7u8Of7S9rONGZfX7SsdbLUVOlaeu3gez/XoevafErRV64oueIKMn/3SNrH3gebReiUIuSXrMQi5JxZX6slN13LtnmP3np9RViStyeuKLniCjJ/90jax94Hm0XolCfhz8xBc9QUZP/ukaWfvA82itMo8fqr7qt1Y8VUTlPXJdZvSZXAoLt6ooVcjpia/o9rr0Kx1Hn/1HPC/L3CPf5bf3uvUrHUef/Uc9L0sUcnriK7q9Lv1Kx9Fn/5HPy1K3VtQL6Vlz2p/v0owSV SSpMcs5JJUXIlCTk98RbfXpV/pOPrsP/J5WSoQRH9sL7q9Lv2e8c4983fuvRc6DcqquP/uIZ6XpQq59mMhl14rcWtFkvTY0scPu/xGX3R79D8dpRlZ zmrvhDnu zWSpff6Ituj/qbf1Qjt1beWTs/TGNk7ees kKd75JbK11 oy 6PXpyTZqRtZ z6gt5vt4jl6TiLOSSVJz/rRWV4r1s6bclV RdfqMvuj16ck2akbWfs oLeb7Lbq10 Y2 6Paov/knvSNrP2fVF p8TXYKbdVjgj5 qE68R65S7j2KFVGEV7UrXeFbIacnoIiJKkK/9PdNNdH3X5d9HzG 26ODrnptVNZv dH7pb9vqom010ivRYsa3 3RQfcO7pLE7NIv/X1TTfT912XfR47Pe RCW/XnrbeL1InJTkkqzkIuScXdjoOfgCInqjL7pb9vqom /7rs 8jx3Z4dTEpAURNV2f3S3zfVRNprpNeiRY3PZKckFec9ckkqDvH4IT1RtVu/XZKdWcli nHR6Elv rpEtJd RU5PVO3Wb5dkZ1aymP5aNHrSm74uUe2lFnJ6omq3frskO7OSxfTjotGT3vR1iWwv/YpcknSOhVySirOQS1JxqYWcnqjard8uyc6sZDH9uGj0pDd9XSLbS78ipyeqduu3S7IzK1lMfy0aPelNX5eo9kx2SlJx6VfkkqRzEL/ZSU9oRctKuNHb6/L 0tHPS/p Ie7T9N/spCe0omUl3OjtdXl/6ejnJX2/UPdp6m920hNa0bISbvT2ury/dPTzkr5fyPvUe SSVJyFXJKKs5BLUnGpv9lJT2hFy0q40dvr8v7S0c9L n4h79P03 ykJ7SiZSXc6O11eX/p6Oclfb9Q96nJTkkqznvkklTcW8lOui7JMHoCj46eOPQ41nFZIuYxneyk65IMoyfw6OiJQ19jvZYlah5TyU66LskwegKPjp449DjWcVki5 E9ckkqzkIuScVZyCWpuKlkJ12XZBg9gUdHTxx6HOu4LJHzmE520nVJhtETeHT0xKGvsV7LEjUPk52SVJz3yCWpuKXJzi5JLnoC1PZY6Ps52m77gDjfZclOUmrrinlEo8 D3l4W n6Otts oM53SbKzS5KLngC1PRb6fo622z4gz9d75JJUnIVckoqzkEtScUuSnV2SXPQEqO2x0PdztN32AXm y5KdpNTWFfOIRp8Hvb0s9P0cbbd9QJ2vyU5JKs575JJUXKlkZ7TdEmTRiAm3ju15HOu4aFslO6PtliCLRk24dWvP11ivRdsq2RlttwRZNHLCrVN7Hsc6LprJTknSHxZySSrOQi5JxZVIdkbbLUEWjZxw69Sex7GOi7ZlsjPabgmyaNSEW7f2fI31WjSTnZKk4zi8Ry5J5f33 hCNoicJs9DXhZ4Q7JJ0pO/nyglQr8iD0JOEWejrQk8IklKNpPctWvUEqIU8AD1JmIW LvSEYJekI30/d0iAWsglqTgLuSQVZyGXpOIs5AHoScIs9HWhJwS7JB3p 7lDAtRCHoSeJMxCXxd6QpCUaiS9b9GqJ0BNdkpScU8DQYRHg1byM0xSB3cLefcC/uVrntSC3iWpR5/HqN3GR092dmkvot9vt1Z2KeCPkAr6o/fi5xijjxuVNb7oeYzabXxZ 2W39qL6ffrjy7uhrEGXpB59HqN2Gx892dmlvch fWpFkoq7HQfnSpTAtZBUjVfkklTcx3EcnG/4QLK/ Ozy5RV9HqN2G1 XLxPp7YV/2SmWLkk9 jxG7TY erKzS3tR/XpF/kD2FbkkjQr5qTda0fMLS0k7OVXIaQX8y9e4ri7oWYm LPSEIL1f jyi0c8PenL3mbdurRAGPuOdgj47x6wvubLQvzSj90ufRzT6 UH/MvuV6S87swf8jqxN urfqqInBOn90ucRjX5 0JO7I3xqRZKKmyrkFa/Gv1QeuyQ94xW5JBU3XMg7XNGumsOzdjus20 j841ely790ucRjX5 ZL0fkbwiD5KV6MtCTwjS 6XPIxr9/KAnd18ZfvyQMNgIo98ud5mvpP5Ckp2jzj6iY3GVpN8uKeRRz1h tUMt6PSkHj3RR0zMvWO3eex23Kgr 116j/zj42PJg/Kr2j3j3njOvEbvdxR9fNF2m8dur426ut9lhTyrSGSgJ/XoiT5yYm7GbvPY7bhRGf361IokFbekkF959VHpSkeSVvCKXJKKCy/kGVfI2Vfl9KQePdFHTszN2G0eux03KqNfr8iD0JN69EQfNTE3a7d57PbaqKv7DU92Zl0dR4 v4sknaU9ekUtScZdG9LujJ81GZSXcotvrMo s9qL7pc Xvk fHecVeRB60mxUVsItur0u88hqL7pf nzp /TVaxbyAPSk2aishFt0e13mkdVedL/0 dL36chxFnJJKs5CLknFWcglqTgLeQB60mxUVsItur0u88hqL7pf nzp 3TkOAt5EHrSbFRWwi26vS7zyGovul/6fOn79NVrJjtPtidJ2bwil6TiTHYGykrWRctKqO6WEKTvF/o6ZyHuU6/Ig2Ql66JlJVR3SwjS9wt9nbNQ92l4Ic/4lM3 ZM9K1kXLSqjulhCk7xf6Omch71OvyCWpuCWF/Mor5OyrcUnK5hW5JBW3rJBnhREyZCXromUlVHdLCNL3C32ds5D36dIr8s/PzyVv1Kp2z8hK1kXLSqjulhCk7xf6Omeh7tPwZOczZ7 hvnIMFTeZpD1dGgiyOEpSPJOdDWQl5ogJt47HjaLvg6z2svo12alhWYk5asKt22uj6Psgq72sfrHJzkoJrEc6zOFfWYk5csKt03Gj6Psgq72sfk12SpKmTRXyyle0lccuSc94RS5JxU0X8opXthXHPCIrMUdOuHU6bhR9H2S1l9VvRnvDgaCoQV3pTAGnz 1f9Me1fPyQtS7RnEd e6cK b0GCSKuwGlzkqRHQgJBXW9dSFIFJjsD0f9E7/Ina7Td1mW3Wz j6OtisvMCpDTgFUnCUVn9jtptXXZLno6ir8vLZCftU5Fgdk3oCcEuiblou63LbsnTUfR1MdkpSRu4HQfvXlUm10JSNV6RS1Jxfwq5V6LvrwE9IdglMRdtt3XZLXk6ir4uQ8nOzztHEb6AuFLUZqI/Vkh/3C3LbutCf8wuC31dniY77xXyR//HbmgbSZLe8T/5p5LOVE3YXQAAAABJRU5ErkJggg==" alt="" data-rotate="" data-proportion="true" data-rotatex="" data-rotatey="" data-size="410px,410px" data-align="none" data-index="0" data-file-name="qrcode_www.twitch.tv.png" data-file-size="5839" data-origin="," style="width: 410px; height: 410px;"></figure></div><p><span style="font-size: 48px;">Welcome to <strong>WAoS!</strong></span><br></p><p><span style="font-size: 22px;">Try <span style="color: darkred;"><strong>scanning </strong></span>the picture above I dare you!</span><br></p>', 
  '<p><span style="font-size: 48px;">Välkomna till&nbsp;</span></p><div class="se-component se-image-container __se__float-none" contenteditable="false"><figure style="margin: 0px;"><img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/02/a9/16.jpg" alt="Bird-White eagle" data-rotate="" data-proportion="true" data-rotatex="" data-rotatey="" data-size="," data-align="none" data-percentage="auto,auto" data-index="0" data-file-name="white-eagle.jpg" data-file-size="0" origin-size="640,380" data-origin="," style=""></figure></div>',
'<div class="se-component se-image-container __se__float-none" contenteditable="false"> <figure style="margin: 0px;"> <img src="https://media4.giphy.com/media/cklPOHnHepdwBLRnQp/giphy.gif?cid=790b76113d63e6507bd35e8824584a4d3e75ad2a46ca22a3&amp;rid=giphy.gif&amp;ct=g" alt="" data-rotate="" data-proportion="true" data-rotatex="" data-rotatey="" data-size="1341px,1006px" data-align="none" data-index="0" data-file-name="giphy.gif?cid=790b76113d63e6507bd35e8824584a4d3e75ad2a46ca22a3&amp;rid=giphy.gif&amp;ct=g" data-file-size="0" data-origin="," style="width: 1341px; height: 1006px;"> </figure> </div> <h1>Dance babe! Dace!<br> </h1>']);

  return (
    <Carousel
    controls={false}
    indicators={false}
    pause={false} >
      {slide.map(( item, idx ) => {
        return (<Carousel.Item interval={1000}>
        <iframe className="view" title="test" srcdoc={slide[idx]} />
        </Carousel.Item>);
      })}
</Carousel>
  );
}

export default SlideView;