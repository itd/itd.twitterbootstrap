from setuptools import setup, find_packages
import os

version = '0.1'

setup(name='itd.twitterbootstrap',
      version=version,
      description="Plone 4.2 bootstrap theme.",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?:action=list_classifiers
      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        ],
      keywords='Plone, diazo, bootstrap',
      author='Kurt Bendl',
      author_email='kurt@tool.net',
      url='http://tool.net/',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['itd'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
            'setuptools',
            'plone.app.theming',
            'plone.app.themingplugins',
          # -*- Extra requirements: -*-
      ],
      entry_points="""
      # -*- Entry points: -*-

      [z3c.autoinclude.plugin]
      target = plone
      """,
      #setup_requires=["PasteScript"],
      #paster_plugins=["ZopeSkel"],
      )
