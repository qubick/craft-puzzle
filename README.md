# craft-puzzle

Parameterized prism model


### Install
	$ npm install craft-puzzle

### Parameters
	- side1: connector shape and direction at the bottom
	- side2: connector shape and direction at the left
	- side3: connector shape and direction at the top
	- side4: connector shape and direction at the bottom

## Parameter Format
	`[+|-][rectangle|circle|triangle]
	`+ makes convex connector
	`- makes concave connector hole
	`default is none, leave it empty if don't want to make connector on side

## Example
```html
 <craft>
 	<craft name="puzzle" src="./index.xml"/>
	<row>
		<puzzle side1="+triangle" side3="+rectangle" side4="+circle"></puzzl    e>
		<puzzle side1="+triangle" side2="-circle" side3="+circle" side4="+re    ctangle"></puzzle>
		<puzzle side2="-rectangle" side3="+triangle" side4="+triangle"></puz    zle>
		<puzzle></puzzle>
	</row>	 
</craft>
```
![example](example.png)

