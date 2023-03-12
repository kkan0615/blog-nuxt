// <script type="text/javascript">
// amzn_assoc_ad_type = "link_enhancement_widget";
// amzn_assoc_tracking_id = "requiemblog-20";
// amzn_assoc_linkid = "4ceba45225ff312b220935a17294cd6a";
// amzn_assoc_placement = "";
// amzn_assoc_marketplace = "amazon";
// amzn_assoc_region = "US";
// </script>
// <script src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=US"></script>

export const createScript = () => {
  const s1 = document.createElement('script')
  s1.type = 'text/javascript'
  s1.id = 'amazon-affiliate1'
  const code = `amzn_assoc_ad_type = "link_enhancement_widget";
    amzn_assoc_tracking_id = "requiemblog-20";
    amzn_assoc_linkid = "4ceba45225ff312b220935a17294cd6a";
    amzn_assoc_placement = "";
    amzn_assoc_marketplace = "amazon";
    amzn_assoc_region = "US";
  `
  s1.appendChild(document.createTextNode(code))
  const s2 = document.createElement('script')
  s2.type = 'text/javascript'
  s2.id = 'amazon-affiliate2'
}
