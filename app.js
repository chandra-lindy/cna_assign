const beds = ['2','4','6','8A','8B','1A','1B','10A','10B','3A' +
,'3B','12A','12B','5A','5B','14A','14B','7A','7B','16A','16B' +
,'9A','9B','18A','18B','11A','11B','20A','20B','22A','22B','22C' +
,'22D','15A','15B','15C','17A','17B','19A','19B','21A','21B','24A' +
,'24B','24C','23A','23B','26A','26B','26C','25A','25B','27A','27B' +
,'29A','29B','31A','31B','28A','28B','28C','30A','30B','33A','33B' +
,'32A','32B','35A','35B','34A','34B','37A','37B','36A','36B','39A' +
,'39B','38A','38B','41A','41B','40A','40B','43A','43B','42A','42B' +
,'45A','45B','47A','47B','46A','46B','44A','44B','44C','48A','48B'];




function remove(emptyBeds, beds) {
  return beds.filter(el => {
    if (formated.indexOf(el) < 0) return true;
  });
}
