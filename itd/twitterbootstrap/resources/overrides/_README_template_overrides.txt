Put jbot-style template overrides in this folder.

For example, if you want to override a template,
put a file with the full path to that object in here.

In this theme product
-----------------------
In this theme, we override the default footer.pt
and logo.pt, naming them:
  plone.app.layouts.viewlets.footer.pt
  plone.app.layouts.viewlets.logo.pt

You can tweak these to your hearts content, remove
them, or add overrides from templates Plone's viewlets
of from any other products.

Other ideas
------------
Imagine this: You want to override thwe portletpage-column.pt
template in collective.portletpage. So, copy that template into
this dir, and make the filename:

  collective.portletpage.browser.portletpage-column.pt

Easy peasy.
