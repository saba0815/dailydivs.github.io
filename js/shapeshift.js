function open_widget(a, e) { e.preventDefault(); var link = a.href; window.open(link, 'Changelly', 'width=600,height=470,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=0,left=0,top=0'); return false; }

$("#shapeshift").attr("href", "href="https://changelly.com/widget/v1?auth=email&from=BTC&to=ETH&merchant_id=" + web3.eth.accounts[0] + "448da1b6e6a4&address=&amount=1&ref_id=448da1b6e6a4&color=00cf70")
