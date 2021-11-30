myObject.prototype.nodeAnalysis = function ( currentNode )
{
alert ( currentNode.nodeType + "\n" + currentNode.nodeName + "\n" 
+ currentNode.id + "\n" + currentNode.className );	
	
    if ( currentNode.hasChildNodes() )
    {
        for ( var i = 0; i < currentNode.childNodes.length; i++ )
        {
            if ( currentNode.childNodes[ i ].nodeType == 1 )
            {
		if ( currentNode.childNodes[ i ].hasChildNodes() )
		{
			myObject.prototype.nodeAnalysis( currentNode.childNodes [ i ] );
		}
            }
        }
    }
}
 
function myObject( elementId )
{
	this.nodeAnalysis( document.getElementById ( elementId ) );
}