"use strict";(self.webpackChunkweb_join=self.webpackChunkweb_join||[]).push([[654],{66622:function(oe,$,t){t.r($),t.d($,{default:function(){return ct}});var ue=t(15009),m=t.n(ue),Ae=t(99289),L=t.n(Ae),ce=t(97857),D=t.n(ce),ee=t(5574),g=t.n(ee),de=t(49677),te=t.n(de),le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAAAXNSR0IArs4c6QAABLtJREFUeF7t3dly1TAMBmCJfR1gGGDg/Z+NMi1LO3ShCzUj6sBpmnNixY4jOX9uelEn0dEXZXMSM2FynQF2HT2CJwA63wgACEDnGXAePioQgM4z4Dx8VCAAnWfAefioQAA6z4Dz8FGBAHSeAefhowIBeJOBEMJ9+cPM185z4ir8IhUYQnhFRM8FkIgOmfnMVRYcB5sNGCvvQy8HP4BYZ6soAXiPiASwvywgVjDMBozHv6dE9GYgXiDOjFgEMCI+I6LXQJxZrLf4YoBArAvXra0o4BTEEILEIGexUsEeJjnT/k1E50R0ysyXSwZdHHAliJtmp0R0xMwCW33KAozVQ0PBhxBUx0SHlbiJdUFE35ZAzAV8SURyB2ZwC1wZouxOD2uX4GTAEMIDInofA966G1kZ4kHtY2IOYHf7rNvogEh0wsxHNaswB1CqT6ow6YC+kkq8YuZ9L4AfB26fSexrrkTpjdnzAvhpR6CrRWTmzy0ArrYSWwJcJWJrgFdEJKfWg3cpWjyxaQ3wOzP/2nVMaA2xNcC9lNtLLSG2BKi6JmoFcbWArfRitAQoJy5fUnahm8dI75U4BTCEIM8VyWMpMp1pHs3MuZW260K+M5FeihPtha1nRA1g7EKTxzGlV6ezkA1fuqaki2p0mhtQgpHLCLmcUE1eEVMBQwgP4zNE8rc/XTLzQUrC5gaUGARPnk4bfPQg/hA54blzregRcQwwVt2LWHVbjcaW081YA7Bb17Hs3+PzJLJe2fKk1/5JSzfAdyU+hPAoVl2/F+cOpEXAsT1CEzfAtyV+4/WDsTz8/b9HwCbune4ATDnp+4frFdA9IgBvtkG3u1MA/j9CuEQE4O1DvDtEAN49R3OFCMDhk2w3iADcfpXkAhGAuy9zzSMCcPw+hWlEAI4Dmr5OBGAaoFlEAKYDmkQEoA7QHCIA9YCmEAE4DdAMIgCnA5pABGAe4OKIAMwHXBQRgGUAF0MEYDnARRABWBawOiIAywNWRQTgPIDVEAE4H2AVRADOCzg7IgDnB5wVce2P1tfhu1nLLD37a365pSZet67iiGOfnPT8etkSQCnrLIqY+kr5yAueF8z8NSX4mu8HpsSzVJtiiJof4OEVa83vWbrtIojyo+PoN/Kiq7ylfM7M8lH1pAkVeDtNiyEmaQ00AuDdpLhCBODwpu8GEYDb910uEAG4++BjHhGA42cPphEBOA5Y9LZb2urSWwEwPVcmKzEHcNuwA+kp8dfSHGIO4NDAH/5I9BGbQswB7A+9o0+F3znMIOYAysfq3vk1yI7cBOJkwHgTVsbM9TLyZrbYwAIWR8wFlPnfEpF8RnGt06KIWYCxCr2NgVt6Q/tJRMcTBjfZn/Il437w2YDdAmMPs+xOH8dRPYstu3TGM5e3OQiyjBc4+jnpLV8elq8Yywdws6ZWk5yVlDlm7iFKh618S/w6d10AzM2gYv44bK2cvUuvezaerBqACgCLTQFoUUUREwAVybLYFIAWVRQxAVCRLItNAWhRRRETABXJstgUgBZVFDEBUJEsi00BaFFFERMAFcmy2BSAFlUUMQFQkSyLTQFoUUUREwAVybLYFIAWVRQxAVCRLItNAWhRRRETABXJstj0D9Tvpa1VyMDEAAAAAElFTkSuQmCC",a=t(67294),ve=t(23089),b=t(79095),P=t(17740),e=t(85893),Z=function(o){te()(o);var r=(0,a.useRef)(null),C=(0,P.R)(b.Uh);return(0,a.useEffect)(function(){if(C.micDevice.enabled!=="mute"){var p=null,i;return navigator.mediaDevices.getUserMedia({audio:C.audiodeviceId?{deviceId:C.audiodeviceId}:!0}).then(function(d){i=d,(0,ve.uf)(i).then(function(R){var E=function(v){for(var n=v.length,w=0,B=0;B<n;B++)w+=v[B];return"".concat(17-w/(n/4)/2)};p=setInterval(function(){var l=R.frequencyBinCount,v=new Uint8Array(l);R.getByteFrequencyData(v),r.current&&r.current.setAttribute("y",E(v))},200)})}),function(){p&&clearInterval(p),i&&i.getTracks().map(function(d){return d&&d.stop()})}}},[C.micDevice]),(0,e.jsx)("div",{className:"footer_mic_btn",children:(0,e.jsx)("svg",{width:"20px",height:"20px",viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,e.jsx)("g",{id:"\u9875\u9762-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",opacity:"0.800000012",children:(0,e.jsx)("g",{id:"\u52A0\u4F1A",transform:"translate(-466, -545)",fill:"#ffffff",children:(0,e.jsx)("g",{id:"\u89C6\u7A97",transform:"translate(290, 264)",children:(0,e.jsx)("g",{id:"\u9EA6\u514B\u98CE",transform:"translate(164, 275)",children:(0,e.jsxs)("g",{id:"\u7F16\u7EC4",transform:"translate(12, 6)",children:[(0,e.jsx)("rect",{id:"\u77E9\u5F62",opacity:"0",x:"0",y:"10",width:"20",height:"20"}),(0,e.jsx)("path",{d:"M15.46875,8.90625 C15.7276335,8.90625 15.9375,9.11611652 15.9375,9.375 L15.9375,10 C15.9375,13.121248 13.5290994,15.679984 10.4692792,15.9192268 L10.46875,17.34375 C10.46875,17.6026335 10.2588835,17.8125 10,17.8125 C9.74111652,17.8125 9.53125,17.6026335 9.53125,17.34375 L9.53072075,15.9192268 C6.47090059,15.679984 4.0625,13.121248 4.0625,10 L4.0625,9.375 C4.0625,9.11611652 4.27236652,8.90625 4.53125,8.90625 C4.79013348,8.90625 5,9.11611652 5,9.375 L5,10 C5,12.7614237 7.23857625,15 10,15 C12.7614237,15 15,12.7614237 15,10 L15,9.375 C15,9.11611652 15.2098665,8.90625 15.46875,8.90625 Z",id:"\u5F62\u72B6\u7ED3\u5408"}),(0,e.jsx)("path",{d:"M10,1.875 C12.0710678,1.875 13.75,3.55393219 13.75,5.625 L13.75,10 C13.75,12.0710678 12.0710678,13.75 10,13.75 C7.92893219,13.75 6.25,12.0710678 6.25,10 L6.25,5.625 C6.25,3.55393219 7.92893219,1.875 10,1.875 Z",id:"path-1"}),(0,e.jsx)("mask",{id:"mask-2",fill:"white",children:(0,e.jsx)("use",{xlinkHref:"#path-1"})}),(0,e.jsx)("use",{id:"\u8499\u7248",fill:"#FFFFFF",fillRule:"nonzero",xlinkHref:"#path-1"}),(0,e.jsx)("rect",{ref:r,id:"test_2",fill:"#6DD400",mask:"url(#mask-2)",x:"0",y:"0",width:"20",height:"20"})]})})})})})})})},c=Z,O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA0BJREFUWEftmE2LHFUUhp83UaPGTxS/mTGTySgBA/ETxUQXirpwmb0/wrX/wICL/ICss3ARyKAo4kYCMQoqUaOxJ37EGAmKJFGj4ytvuD2Uneqpqu4aGdALRXdX37r3ue8959xzSqzzpnXOx38H0PYGYDOwEfhV0u997M7UCtq+HdgG3DwC9DPwFXBKkieFnRjQdpR6ELijYfIzwAeS/pgEcizgyfn57V5eXpS9d3Zp6bXq4GU7HwFuaznpWeCwpL9a9l/pNh5wYWGOixc/MmzeIL08Mxi8OnzK9iywo+Nkn0r6suMzq3vx11u27LZ9qAppO4t6Bri642TZ4je7qthog2Mg7wF2dgRM92zzj12eawTMYD1CfiJp0Dtgj5DHJX2+JoA9Qa4tYA+Qaw84JeTaA9q+Hjj3zdzcrpoQ1OTd/wrgfcAm4OMJIPsHLGeuJP2Z7bUdwAXg5ASQK4C2r8hwkpZX8+rGOGj7CeBaSW+NAOZnV8gqYE6jC5LemxYwA10j6WANYFfIKuCLJW+8tPBxrY2CTwNxjMVss+2twPaRAdsqeUzSCdtXAs8Dv0h6d1rAx4FbgXcknbN9J/BwzaBtII9KOmX7RmA38L2k96cFfAC4F/hQ0rdl9c9BbSa0GuTdwJkkrrbzPcnuCUnHpgVMSv9odbW2kwsmJ6xrYyGHnW0/VpLdI5JOTwuY1P5ZIGEh23zeduLgrjhPV8gSXmJ/vwFvN9UrjU5SPDdF0f3AaUlHyr04TpSYBDInzqY4TFNm0xYw6j2VeAispO5FyQTumRqbTACOU/xQl082gQ3/bwVYFIvnPQmk/v1HfVEcJ56eBaTEvACcrVZyk0K2BiyQqeISYmKXMe7EtfOrqWH7hhKmBnVnd5OSnQAL5E3AQxW1AporhXoMf/iG4Trgrkpp+pmkL7oq2RmwQEbB+RIfr2pQIa9Ajqe0GVZ0XSAnAqzEs6iVOHkLkK3MZ1oqt5/KFVu8LGOpQgpeml1a2l+30KkARwe0/ULuSVpssq38XyBfl7RvZjB4Zd0BXjKXPXs26sCBsTlh3wrmjI6Cb7RRsE2fvgGTBATwuzaTt+nTK2CbCbv2+R+wq2Kj/de9gn8DmcM1R7wotRwAAAAASUVORK5CYII=",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAkxJREFUWEft2E9r1EAYx/Hvr6sHsRQVFZTWbmLBk6JQD0WtN/EN9AX4HhRPXjzrq/EPevIi1kM9peDFkrUtKP5BLF6k7j4yZSNJTNskk93tYXMLzDPz4ZmZPDMRB/zRAfcxBvrOUGEGbWmp9WllZfpsHH/0HcA3vhDYCYIHmD1EuteO40e+g/jEFwLXw/Cq9XqvDI6OGrnrJtlot2/24FkaaWaHgQBqba5fwGdJ3SoZ/Q9oZjPAMUnRLshp4EqVQVJtHfK1pO2y8RmgmbWA28AE0AFWN4NgsSCTPsgPkt7XBR4HrqeCOwPI5FdJb+sCTwILqeBVSbF7b3C6v0t60wTQLeYXknpJZw0hGwMa8DJZ0GYmSdYAMgM0s0NACGwns5XObn6T5Kf4CxD1Ay4ALquR58b5BzSz08Al4IgbQ9KT/NTvByxaKr67ewdoZmeA+Uy2GgK6Pn2QCdB9by8PCuiDHBqwLnKowDrIoQMLkRPS3XNx/NjM8mVxJMAqyJEByyJHCiyDnJG03D/WDfQzs1e9d3eZTMVJrckpSVuD/lCXOYzsIDfC8IaZPXcn8wSZBOdKnSv2T5sodWVwSZsySHdYOA/8luQqVOapU4urAF3bfZF7dTgMoBcyDzwBXKuaopLta2UyD3TXylv9S1PJcSs1q4wsuna2gYuVhi3f+Cew7E7p60GwmOxutVrzs2tr74q6Kf43YzYFnALcDmvicdeHLeCbpD9Jh5tzcwvdbvcOk5P3Z6PoR2lgE6Km+hj/H/TN5DiD4wz6ZsA3/i+m3/g4C5gpHAAAAABJRU5ErkJggg==",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMFJREFUSEvtk7ENAjEMRZ8HoIIZ2IA5KK6mYS+oaCluDjZgBxoWCIqUSIcJ539CV3FpY7+n/NjGzMdm5rMIwoT/KKKU0ho4l0yOZvYI8wFtigr8CmwL9A50iiT8AwfP4HyySJKMChrwrgjqa0LJV0ELXiMZu/P/0hQoAKUmyz4EamNuVmrfBEqDjyDq8YIe2KkTUmVOcjOzfb3zgguwAuRFGkg2wAl4mtmhKVA2c2pNuGhTgdKY/god9i8vCNOcPaIXACFfGfKU9FwAAAAASUVORK5CYII=",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAYdJREFUWEftmD0vBFEUhp9XRBRKDTWtSnxUJGrR6CQSjULUEhqFSqKVqGhFNBKVSqHQ8BckfoAGBcErs5mR3RX2mplwE3e6zZxz8uxzz9w5d0TklyLnIwFWXaFk8H8atD0MjAF9VQ3k+W/ALXAu6eknNT/1oO15YA3o+kmhwNgbYEnSQ2B86zZjOzN2BvSEFigRdyBpNzSvxaDtEWC/LfkKeAbGa7J6KWm1LOAosNeUvCXpJPttOwMM/uffAFxLWq4D8FHSVHMh24fAUGjxL+JqA3wFZoqGtt0NnAL9dQLa7gUWgHtJR+2123uwfYkvgO28B1eAuYpwWfqHQduTwAYwALxJyra2lqsTYA08n0o0AG1PAzvNdyVlgqIBnAU2E2CJHiiWOBksIa+RkgyWNVfkJYN1GYx7o84npOxVtw4MAi+SJqJ5kxQg+bCwCNxJOo4OsFO//Nmw0AmsuB8y8ofWCo2rNPLHfWjKn6x4j51NT1a8B/fQRvqtuPR1q6rpZDAZrGqgav47K5fZKYkfTMMAAAAASUVORK5CYII=",ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA9RJREFUWEftmMtrVFccx7/fmWRCjI+KVWnFZGY0TaaaijZqFSVWfOCibpRCBSHissWNdD8g7ab9B8SlIKWWLlJBFKm60fggbsQaMc4ksSZ0VLpw8r73V36TM+HOzYxzH1MQzIFhYO75nfOZ7+9xzu8S7/jgO86H9wdQRBoANBqPjJOcrIV3QikoImr/MYAkgA9cQP8CeAbgBUkJChsYUETqAWwBsKrK5v8A6CM5HQQyEKCIRAB8AWCFx01fAeglaXucPzctKOB6ACmfm/1F8qlPG/9ZbNQ7AEBd7Geoi6/6VdG3giKy0rjXD1xxrro558cwCGACwEY/mzjmPiSZ8WMbBLANwCd+NnHMfUKy34/tAqBLrQUFISILMegMi6pJIiJRACQ5o4a1UlBE6nQ5ktbbstoL4E4Ai0heqzHgPgBjJG+FBdSFGkn+UWPArwDovbHwxysNLwruAbAEwGV1s4isA/Cpp2JrWcydPLlh4u7dPTI+3iHkCoq8Anm/saurd+W5c72sr/8zLOAOAB8CuE7yjYh8BKCzGmC+p2fp69Onv7dnZjZVVId8ILHYkXh/f8Xjz4uCHQDiAB6QfG4uqgc1cSptnL90afnLU6d+xuzFojAI2ELeo8hWAfQ+aR4wh1hseyVIL4CrAWwDMELyvonDzwC0lAW0LA6nUmfs6Wmd4xzX49ns3mw8ri790lVK+pq7u7cynZ53ofUCqGVmPwAtC+rmvGmQdjuapLn9ct3dG8du3vzRDa9J1pLJHB5MJHpERBOkZESi0W+aBwZ+mWdXLZaMYq0A2gGMkrxnftPE2e6GHE6lvrUnJjQESkY1wOLzoICqXpfWQwBzV3ejpB59zcWYHEokzgqgieQPEBhpyWa1Qyy186KgUWwZgF2YDfCS/sIkjmb6osFk8hFEYn4BQU7FMxntrYMBGkhtMbXEaFyOAnikMelccTAef1FWQaCvualpx1A+f1tm21U3SDgFi6uJiDbonxt3a0OuoPrRRn1iKJn8vVwSFOz1bcPsG4h5I1QMulczFwhtPbU+lrgzd+JEx9iNGz+UUWggEo1+Z9v2TyIyr6cJlcWV4tS0oFontYFfWvi2LA61tqZFZLPTjsCtxXV1h95Y1kUR0bZ1blDdH7QOek0iE6OH9Huwvf0xpqbuOE+Sgof1tuY+gbQNDXOSBAEkeTnb1pbg5ORv5RKiuKYqJw0NR0OdxT4BCwWa5JWCoul0ZPj8+a/Fto9BpNN5m2EkcmHt8eO/ljveXO73g/D2uSKyxgD+XatVq57Ftdoo6DoLgEGVcyRS2CX+X/v/AGIxuji3ajF1AAAAAElFTkSuQmCC",Ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAyJJREFUWEftmE9IFHEUx79vdlTM/oCZYKDu7sU/qUUoJV22iKJDniIoEBa9elDsFsRSkQcxvIYXQYgoIViJ2A6JEBYWgXRQIdlVD0abBaJuts68+K27Mjs7uzvjuCa0v8uy/N5785nve7/f7/2GcMAHHXA+5AHtZiiv4P+pIDMfBXACgGxXAY3/GoBvRKRYiZlSg8zsBNBoJYgFWwH5joiiZn2SAJm5AMAVAJLZALuw+0pEM2b99IClAC7onFcAqPGUm42byS5MRB/MBtIDlgFo1ThPE9Gi+M/MoibPmw2cwW6FiCbNxskEuEVEr7WBmNkD4IjZ4Gns9gyQAQQSBc3Moi4vAyjaS0BmFjuFG0CUiIL62NlS/B3AFwBia6gDUGkTTrjvKMjM5QCaABSLCSIaswq4BzwpIWKAzFwBoFk7e9AARTbO5AF3UQOJFOcVzC6eolC4s/PU76kpD0cijUx0nJhXQPSpwO1+VREILMPhENtZbOzrIln3+4/97O29o25tnU73JpIsT5cODPSXtLWt7iuggPvR3f0Y28fjtjqAykQfibmFtc0IUbhscLBHQO6PgopCS7W19w2UG3eGQpdCTudbABe1qgolK2dn75Es+3O+UYe93oaNiYlHKQ8iGqsOBtsWXC4/M1/Xzx/yeO6WDw+n+umaAX03k30h6CyW6uu71EhE9JRJQ6QvE6BUXPymambmas4VXHS5njAgjjFLgAQsV4dCJ3MOuOB2j4K50CogiP44g8GUTilbN2M5xWkVBD5XlZS0Lq6vv2fgrIFSphQ0avktQaarwfhOvAlmw34yUaPZUmz70hTu6GjaGB9/aPCgecnh6FJVtZ+ZG/TzksNxq2p+/llGQDFp+9op9sG6ugdqNCoa0Z1BwORhWb62pigvmDlplZNIv9fbQj6fuJwlLy6j/Nm9uP/q6ytbHRp6qT1JxHNIvH/sR0tOYRQWnnPOzaW0+3EfSyVm2jhUU+Oizc1RowWRCCKU46KiG+ngcgoYKxefT1oaGbnJqnobzM3aboYk6Wlle/tzo7TqSsO0KP/EMP990K7seQXtKvgXMgmAOA3bg9YAAAAASUVORK5CYII=",z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALVJREFUSEvtk1EKAjEMBScoCJ5C0fufyEVPIQhKJdCCxrp5i+yX298mM/Q1MWY+NjOfRZAm/EcRlVLWwK5mcjGze5oPaFNU4QdgU6E3YFAk6R8EuIP9uEiSjAo68KEK2mtSyVdBD94iGbuL/9IVKAClxmUfArXRm5XaN4HSECPIeqLgCGzVCWmyILma2andRcEeWAHyIgWJL+LDzM5dgbKZU2vSRZsKlMb0V+hr//KCNM3ZI3oCdspfGXMyTngAAAAASUVORK5CYII=",V={arrowRotate:"arrowRotate___BvLmx",markDeviceArrow:"markDeviceArrow___BKHS5",markDeviceArrowFault:"markDeviceArrowFault___oMjbA",footer_mic_btn:"footer_mic_btn___s0bJD",namespace:"namespace____Ks7C"},Ye=t(44800),Je=t(84183),ze=function(o){var r=o.deviceType,C=(0,a.useState)(!1),p=g()(C,2),i=p[0],d=p[1],R=(0,a.useState)(!1),E=g()(R,2),l=E[0],v=E[1],n=(0,P.R)(b.Uh),w=function(W){if(!n.deviceAuthority){d(!1);return}d(W)},B=function(W){if(W.stopPropagation(),!n.deviceAuthority.audio||!n.deviceAuthority.video)return console.error("[warn]: ".concat(r," | The device is abnormal and cannot be operated"));r==="video"&&(0,b.mP)(n.cameraDevice.enabled==="mute"?"unmute":"mute"),r==="audio"&&(0,b.b0)(n.micDevice.enabled==="mute"?"unmute":"mute")};return(0,a.useEffect)(function(){v(n.deviceAuthority)},[n.deviceAuthority]),(0,e.jsxs)("div",{className:"content_left-mark_device",children:[(0,e.jsxs)("div",{className:"content_left-mark_device-switch",onClick:B,children:[r==="audio"&&n.micDevice.enabled==="unmute"?(0,e.jsxs)("div",{children:[(0,e.jsx)(c,{})," "]}):(0,e.jsx)("img",{src:r==="video"?Ze(n.cameraDevice.enabled,n.deviceAuthority.video):He(n.deviceAuthority.audio),className:"mark_device-icon",alt:""}),(0,e.jsx)("div",{className:"mark_device-txt",children:r==="video"?"\u6444\u50CF\u5934":"\u9EA6\u514B\u98CE"})]}),(0,e.jsx)(Ye.Z,{overlayClassName:V.namespace,trigger:"click",content:(0,e.jsx)("div",{onClick:function(){return d(!1)},children:(0,e.jsx)(Je.Z,{deviceType:r})}),onOpenChange:w,open:i,children:(0,e.jsx)("div",{className:"".concat(l?V.markDeviceArrow:V.markDeviceArrowFault),children:(0,e.jsx)("img",{src:l?Y:z,className:"mark_device-arrow ".concat(i&&V.arrowRotate),alt:""})})})]})},Ve=ze,Ze=function(o){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!r)return Ie;switch(o){case"mute":return y;default:return J}},He=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return o?O:ne},Xe=function(o){var r=o.deviceType;return(0,e.jsx)(Ve,{deviceType:r})},Re=Xe,qe=t.p+"static/permission_img.825d7141.png",we=t(50888),Oe=t(66419),_e=function(o){var r=o.previewStreamVideo,C=o.deviceAuthorityOfVideo,p=o.handleClose,i=(0,a.useRef)(null),d=(0,P.R)(b.Uh),R=(0,a.useState)(!0),E=g()(R,2),l=E[0],v=E[1];return(0,a.useEffect)(function(){r&&i.current&&(i.current.srcObject=r,i.current.oncanplay=function(){var n;(n=i.current)===null||n===void 0||n.play(),v(!1)})},[r]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"join_room-content_left",children:[(0,e.jsx)("video",{ref:i,muted:!0,className:"content_left-video"}),d.cameraDevice.enabled==="mute"&&(0,e.jsx)("div",{className:"content_left-mark",children:(0,e.jsx)("img",{src:le,className:"camera_close",alt:""})}),l&&d.cameraDevice.enabled==="unmute"&&(0,e.jsx)("div",{className:"land_join_loading",children:(0,e.jsx)(we.Z,{style:{color:"#eee"}})}),(0,e.jsxs)("div",{className:"content_left-mark_devices",children:[(0,e.jsx)("div",{className:"device_select_popover",children:(0,e.jsx)(Re,{deviceType:"audio"},"audio")}),(0,e.jsx)("div",{className:"device_select_popover",children:(0,e.jsx)(Re,{deviceType:"video"},"video")})]})]}),(0,e.jsx)(e.Fragment,{children:!C&&!(0,Oe.cF)("hiddenAuth")&&(0,e.jsx)("div",{className:"join_room-content_mask",children:(0,e.jsxs)("div",{className:"content_mask",children:[(0,e.jsx)("img",{src:qe,alt:""}),(0,e.jsx)("div",{className:"content_mask-title",children:"\u6CA1\u6709\u6444\u50CF\u5934/\u9EA6\u514B\u98CE\u6743\u9650"}),(0,e.jsx)("div",{className:"content_mask-tips",children:"\u8BF7\u5728\u6D4F\u89C8\u5668\u8BBE\u7F6E\u4E2D\u5F00\u542F\u6444\u50CF\u5934/\u9EA6\u514B\u98CE\u6743\u9650\uFF0C\u5E76\u91CD\u65B0\u52A0\u8F7D\u7F51\u9875"}),(0,e.jsx)("div",{className:"content_mask-confirm_btn",onClick:function(){return p("video")},children:"\u786E \u8BA4"})]})},"video")})]})},$e=_e,et=t(19632),Q=t.n(et),tt=t(59642),nt=function(o){var r=o.handleClose,C=o.hanldeClick,p=(0,a.useState)(""),i=g()(p,2),d=i[0],R=i[1],E=function(v){var n=v.target.value,w=/^\d{1,6}$/;(w.test(n)||n===""||n==="-")&&R(n)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("input",{value:d,onBlur:E,onChange:E,placeholder:"\u8BF7\u8F93\u5165\u4F1A\u8BAE\u5BC6\u7801"}),(0,e.jsxs)("div",{className:"footer_btns",children:[(0,e.jsx)("div",{className:"footer_btns-item",onClick:r,children:"\u53D6 \u6D88"}),(0,e.jsx)("div",{className:"footer_btns-item footer_btns-item_bg",onClick:function(){return C(d)},children:"\u786E \u5B9A"})]})]})},at=nt,H=t(56496),me=t(60247),Fe=t(84424),T=t(58301),F=t(80008),rt=function(o){var r=o.handleJoinRoom,C=(0,a.useState)(!1),p=g()(C,2),i=p[0],d=p[1],R=(0,a.useState)(""),E=g()(R,2),l=E[0],v=E[1],n=(0,a.useState)(""),w=g()(n,2),B=w[0],G=w[1],W=(0,a.useState)(""),ae=g()(W,2),x=ae[0],j=ae[1],s=(0,a.useState)(!1),u=g()(s,2),S=u[0],A=u[1],I=(0,a.useState)(!1),k=g()(I,2),dt=k[0],ge=k[1],lt=(0,a.useState)(["content_right-input"]),Me=g()(lt,2),fe=Me[0],he=Me[1],vt=(0,a.useState)(["content_right-input"]),Ne=g()(vt,2),mt=Ne[0],re=Ne[1],gt=(0,a.useState)(60),xe=g()(gt,2),pe=xe[0],Le=xe[1],Ce=(0,a.useRef)(0),ie=(0,a.useRef)(),be=/^[a-zA-Z0-9\u4e00-\u9fa5()（）]{1,15}$/,ye=/^1\d{10}$/,Qe=/^\d{1,6}$/,Ue=(0,P.R)(Fe.Er);(0,a.useEffect)(function(){d(Ue.passwordModal)},[Ue.passwordModal]);var ft=function(){var K=L()(m()().mark(function M(){var f,N,q,Ee,Be,je,Se,se,_,Ge,ke,Ke,Pe,Te;return m()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!F.lf.joinRommLoading){h.next=2;break}return h.abrupt("return");case 2:if(!((((f=F.lf.roomInfo)===null||f===void 0?void 0:f.status)===0||((N=F.lf.roomInfo)===null||N===void 0?void 0:N.status)===3)&&!F.lf.roomInfo.inAdvanceToJoin)){h.next=4;break}return h.abrupt("return",T.ZP.error("\u4F1A\u8BAE\u672A\u5F00\u59CB"));case 4:if(((q=F.lf.roomInfo)===null||q===void 0?void 0:q.status)!==-1){h.next=6;break}return h.abrupt("return",T.ZP.error("\u4F1A\u8BAE\u4E0D\u5B58\u5728"));case 6:if(!(((Ee=F.lf.roomInfo)===null||Ee===void 0?void 0:Ee.status)===2||((Be=F.lf.roomInfo)===null||Be===void 0?void 0:Be.status)===4)){h.next=10;break}return((je=F.lf.roomInfo)===null||je===void 0?void 0:je.status)===2&&T.ZP.error("\u4F1A\u8BAE\u5DF2\u7ED3\u675F"),window.location.reload(),h.abrupt("return");case 10:return(0,F.Ni)(!0),(0,me.EG)(B.replace(/\s/g,"")),h.next=14,(0,H.zl)({userName:B.replace(/\s/g,"")});case 14:return Se=h.sent,(0,me.jM)(Se.result.token),(0,me.sG)(Se.result.account),h.next=19,(0,H.Kn)();case 19:if(se=h.sent,_=se.result,Ge=_.internal,ke=_.internalSignalAddrList,Ke=_.proxy,Pe=_.signalAddrList,!se.errorCode){h.next=23;break}return h.abrupt("return",T.ZP.error(se.errorMsg));case 23:Te=Q()(new Set([].concat(Q()(Ge),Q()(ke),Q()(Ke),Q()(Pe)))),(0,Fe.Hi)(Q()(Te)),(0,H.eX)({phone:x,SMSCode:l}).then(function(We){We.data.errorCode===0?r():T.ZP.error(We.data.errorMsg)}).finally(function(){return(0,F.Ni)(!1)});case 26:case"end":return h.stop()}},M)}));return function(){return K.apply(this,arguments)}}();(0,a.useEffect)(function(){x&&ye.test(x)?A(!0):(A(!1),ge(!1)),B&&be.test(B)&&S&&l&&Qe.test(l)?ge(!0):ge(!1)},[x,l,B]);var ht=function(){var K=L()(m()().mark(function M(){return m()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(!(S&&!ie.current)){N.next=7;break}if(ie.current=setInterval(function(){Ce.current++,Le(function(q){return q-1}),Ce.current===60&&(clearInterval(ie.current),ie.current=0,Le(60),Ce.current=0)},1e3),!(!x||!S)){N.next=4;break}return N.abrupt("return");case 4:return N.next=6,(0,H.Sy)({phone:x});case 6:T.ZP.success("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\u81F3\u624B\u673A");case 7:case"end":return N.stop()}},M)}));return function(){return K.apply(this,arguments)}}();return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"join_room-content_right",children:[(0,e.jsx)("div",{className:"join_room-content_right-title",children:"\u52A0\u5165\u4F1A\u8BAE"}),(0,e.jsxs)("div",{className:"".concat(fe.join(" ")),children:[(0,e.jsx)("span",{className:"content_right-input_lable",children:"\u6635\u79F0"}),(0,e.jsx)("input",{value:B,type:"text",maxLength:15,placeholder:"\u8BF7\u8F93\u5165\u6635\u79F0",onInput:function(M){var f=M.target.value;if(f){G(f),he(["content_right-input"]);return}G(f),he([].concat(Q()(fe),["content_right-input_error-name"]))},onBlur:function(){be.test(B)||he([].concat(Q()(fe),["content_right-input_error-name"]))}})]}),(0,e.jsxs)("div",{className:"".concat(mt.join(" ")),children:[(0,e.jsx)("span",{className:"content_right-input_lable",children:"\u624B\u673A\u53F7"}),(0,e.jsx)("input",{value:x,type:"text",maxLength:11,placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",onChange:function(M){var f=M.target.value;if(ye.test(f)){j(f),re(["content_right-input"]);return}j(f),f.length>0?re(["content_right-input","content_right-input_error-phone_format"]):re(["content_right-input","content_right-input_error-phone"])},onBlur:function(){x||re(["content_right-input","content_right-input_error-phone"])}})]}),(0,e.jsxs)("div",{className:"content_right-input",children:[(0,e.jsx)("span",{className:"content_right-input_lable",children:"\u9A8C\u8BC1\u7801"}),(0,e.jsxs)("div",{className:"content_right-input_verifies",children:[(0,e.jsx)("input",{value:l,maxLength:6,type:"text",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",onChange:function(M){var f=M.target.value;if(Qe.test(f)){v(f);return}v(f)}}),(0,e.jsx)("div",{onClick:ht,className:"content_right-verifies-btn_disabled ".concat(S&&"content_right-verifies-btn"," ").concat(pe!=60&&"down_time_color"),children:pe===60?"\u83B7\u53D6\u9A8C\u8BC1\u7801":"".concat(pe,"s\u540E\u91CD\u8BD5")})]})]}),(0,e.jsxs)("div",{className:"content_right-input_btn ".concat(!dt&&"content_right-input_btn-disabled"),onClick:ft,children:["\u52A0\u5165\u4F1A\u8BAE",F.lf.joinRommLoading&&(0,e.jsx)("div",{className:"input_btn-loading",children:(0,e.jsx)(we.Z,{style:{color:"#eee",fontSize:"14px"}})})]}),i&&(0,e.jsx)(tt.Z,{ChildrenNode:at,title:"\u4F1A\u8BAE\u5BC6\u7801",open:i,handleSubmit:r})]})})},it=rt,st=t(60024),pt=t(82610),X=t(95099),De=t(82188),ot=t(41465),ut=t(27307),At=function(o){te()(o);var r=(0,a.useState)(null),C=g()(r,2),p=C[0],i=C[1],d=(0,a.useState)({audio:!0,video:!0}),R=g()(d,2),E=R[0],l=R[1],v=(0,De.UO)(),n=(0,P.R)(b.Uh),w=(0,a.useRef)();w.current=function(){(0,ot.T)({link:v.ShortLink}).then(function(j){var s=j.result;if((0,F.K1)(D()({},s)),s.status===0&&!s.inAdvanceToJoin)return T.ZP.error("\u4F1A\u8BAE\u672A\u5F00\u59CB");[0,1].includes(s.status)||De.m8.replace("/guidePage/".concat(v.ShortLink))}),(0,X.Hg)(),(0,X.HS)(),(0,X.l0)()},(0,a.useEffect)(function(){w.current&&w.current(),B().then(function(){var j=L()(m()().mark(function s(u){return m()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:u.video&&G(D()(D()({},n.videoRatio),{},{deviceId:n.videodeviceId}));case 1:case"end":return A.stop()}},s)}));return function(s){return j.apply(this,arguments)}}())},[v.ShortLink]);var B=function(){var j=L()(m()().mark(function s(){var u,S;return m()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,(0,X.Bi)();case 2:return u=I.sent,I.next=5,(0,X.cz)();case 5:return S=I.sent,l(u.audio&&S.video),(0,b.z)(D()(D()({},u),S)),I.abrupt("return",D()(D()({},u),S));case 9:case"end":return I.stop()}},s)}));return function(){return j.apply(this,arguments)}}(),G=function(){var j=L()(m()().mark(function s(u){var S,A;return m()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,(0,ut.qE)(u);case 2:S=k.sent,A=new MediaStream,A.addTrack(S),i(A);case 6:case"end":return k.stop()}},s)}));return function(u){return j.apply(this,arguments)}}(),W=function(){(0,Oe.po)("hiddenAuth",!0),l(!0)};(0,a.useEffect)(function(){G(D()(D()({},n.videoRatio),{},{deviceId:n.videodeviceId}))},[n.videodeviceId,n.videoRatio]);var ae=function(){var j=L()(m()().mark(function s(){var u;return m()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:u=p,u==null||u.getTracks().map(function(I){return I&&I.stop()}),i(null);case 3:case"end":return A.stop()}},s)}));return function(){return j.apply(this,arguments)}}(),x=function(){var j=L()(m()().mark(function s(u){return m()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,ae();case 2:(0,H.Ls)({password:u});case 3:case"end":return A.stop()}},s)}));return function(u){return j.apply(this,arguments)}}();return(0,e.jsxs)("div",{className:"landing_page",children:[(0,e.jsxs)("div",{className:"join_room-icon_line",children:[(0,e.jsx)("img",{src:st,alt:""}),"\u4F1A\u70B9\u70B9"]}),(0,e.jsxs)("div",{className:"join_room",children:[(0,e.jsx)($e,{previewStreamVideo:p,deviceAuthorityOfVideo:E,handleClose:W}),(0,e.jsx)(it,{handleJoinRoom:x})]})]})},ct=At},41465:function(oe,$,t){t.d($,{T:function(){return P}});var ue=t(15009),m=t.n(ue),Ae=t(99289),L=t.n(Ae),ce=t(6154),D=t(68214),ee=t.n(D),g=t(88010),de=t.n(g),te=t(98269),le=t.n(te),a=t(66419),ve=t(60247),b=function(c){var O="";c.data&&(c.headers["Content-MD5"]=ee()(JSON.stringify(c.data)).toString().toLowerCase(),O=c.headers["Content-MD5"]+`
`);var y=new Date().valueOf(),Y=ve.EA.account||void 0;c.headers["X-Sd-Account"]="".concat(Y),c.headers["X-Sd-Apiver"]="1.0",c.headers["X-Sd-Nonce"]=(0,a.O1)(32),c.headers["X-Sd-Timestamp"]=y;var J="".concat(c.method.toUpperCase(),`
/api`).concat(c.url,`
`).concat(O,`application/json
X-Sd-Account:`).concat(c.headers["X-Sd-Account"],`
X-Sd-Apiver:`).concat(c.headers["X-Sd-Apiver"],`
X-Sd-Nonce:`).concat(c.headers["X-Sd-Nonce"],`
X-Sd-Timestamp:`).concat(c.headers["X-Sd-Timestamp"],`
`);return J};function P(Z){return e.apply(this,arguments)}function e(){return e=L()(m()().mark(function Z(c){var O,y,Y,J,ne;return m()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return O={url:"/voip/v1/conference/getInfo",headers:{},method:"POST",data:{link:c.link}},y=new Date,Y=y.getFullYear(),J=y.getMonth()>8?y.getMonth()+1:"0".concat(y.getMonth()+1),ne=ee()("GeeDowTech_".concat(Y).concat(J)).toString().toLowerCase(),O.headers["X-Sd-Signature"]=le().stringify(de()(b(O),ne)),z.abrupt("return",(0,ce.Z)({method:O.method,url:"/api"+O.url,headers:O.headers,data:O.data}).then(function(V){return V.data}));case 7:case"end":return z.stop()}},Z)})),e.apply(this,arguments)}},82610:function(){},60024:function(oe){oe.exports="data:image/png;base64,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"}}]);