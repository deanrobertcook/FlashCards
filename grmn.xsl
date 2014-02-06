<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:php="http://php.net/xsl">
	<xsl:template match="/">
		<html>
		<head>
			<!--<link rel="stylesheet" href="../styles/blankStyle.css" type="text/css" media="screen" title="no title" charset="utf-8"/>
			<link rel="stylesheet" href="../styles/mainStyle.css" type="text/css" media="screen" title="no title" charset="utf-8"/>-->
		</head>
		<body>
			<h2>German study cards </h2>
			
			<xsl:if test="php:function('select_type')='verb'">
			<table border="1">
				<tr>
					<th>Infinitive</th>
					<th>Meaning</th>
					<th>Simple Past</th>
					<th>Past Perfect</th>
					<th>Prepositions</th>
					<th>Examples</th>
				</tr>
				<xsl:for-each select="deck/verb">
				<xsl:sort select="infinitive"/>
				<tr>
					<td><xsl:value-of select="infinitive"/></td>
					<td><xsl:value-of select="meaning"/></td>
					<td><xsl:value-of select="simple_past"/></td>
					<td><xsl:value-of select="past_perfect"/></td>
					<td>
						<xsl:for-each select="preposition">
						<p><xsl:value-of select="."/></p>
						</xsl:for-each>
					</td>
					<td>
						<xsl:for-each select="example">
						<p><xsl:value-of select="."/></p>
						</xsl:for-each>
					</td>
					
				</tr>
				</xsl:for-each>
			</table>
			</xsl:if>
			<xsl:if test="php:function('select_type')='noun'">
			<table border="1">
				<tr>
					<th>Noun</th>
					<th>Meaning</th>
					<th>Plural</th>
					<th>Examples</th>
				</tr>
				<xsl:for-each select="deck/noun">
				<xsl:sort select="noun"/>
				<xsl:choose>
					<xsl:when test="gender='der'"> 
						<tr bgcolor="#86AFDB">
						<td>
							<xsl:value-of select="gender"/>&#160;<xsl:value-of select="noun"/>
						</td>
						<td><xsl:value-of select="meaning"/></td>
						<td><xsl:value-of select="plural"/></td>
						<td>
							<xsl:for-each select="example">
							<p><xsl:value-of select="."/></p>
							</xsl:for-each>
						</td>
						
						</tr>
					</xsl:when>
					<xsl:when test="gender='die'"> 
						<tr bgcolor="#DB7478">
						<td>
							<xsl:value-of select="gender"/>&#160;<xsl:value-of select="noun"/>
						</td>
						<td><xsl:value-of select="meaning"/></td>
						<td><xsl:value-of select="plural"/></td>
						<td>
							<xsl:for-each select="example">
							<p><xsl:value-of select="."/></p>
							</xsl:for-each>
						</td>
						
						</tr>
						</xsl:when>
					<xsl:when test="gender='das'"> 
						<tr bgcolor="#CADB86">
						<td>
							<xsl:value-of select="gender"/>&#160;<xsl:value-of select="noun"/>
						</td>
						<td><xsl:value-of select="meaning"/></td>
						<td><xsl:value-of select="plural"/></td>
						<td>
							<xsl:for-each select="example">
							<p><xsl:value-of select="."/></p>
							</xsl:for-each>
						</td>
						
						</tr>
					</xsl:when>
					<xsl:otherwise>
						<tr>
						<td>
							<xsl:value-of select="gender"/>&#160;<xsl:value-of select="noun"/>
						</td>
						<td><xsl:value-of select="meaning"/></td>
						<td><xsl:value-of select="plural"/></td>
						<td>
							<xsl:for-each select="example">
							<p><xsl:value-of select="."/></p>
							</xsl:for-each>
						</td>
						
						</tr>
					</xsl:otherwise>
				</xsl:choose>
				
				</xsl:for-each>
			</table>
			</xsl:if>
			<xsl:if test="php:function('select_type')='adjective'">
			<table border="1">
				<tr>
					<th>Adjective</th>
					<th>Meaning</th>
					<th>Examples</th>
				</tr>
				<xsl:for-each select="deck/adjective">
				<xsl:sort select="adjective"/>
				<tr>
					<td><xsl:value-of select="adjective"/></td>
					<td><xsl:value-of select="meaning"/></td>
					<td>
						<xsl:for-each select="example">
						<p><xsl:value-of select="."/></p>
						</xsl:for-each>
					</td>
					
				</tr>
				</xsl:for-each>
			</table>
			</xsl:if>
			<xsl:if test="php:function('select_type')='expression'">
			<table border="1">
				<tr>
					<th>Expression</th>
					<th>Meaning</th>
				</tr>
				<xsl:for-each select="deck/expression">
				<xsl:sort select="expression"/>
				<tr>
					<td><xsl:value-of select="expression"/></td>
					<td><xsl:value-of select="meaning"/></td>					
				</tr>
				</xsl:for-each>
			</table>
			</xsl:if>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>