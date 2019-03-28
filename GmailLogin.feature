Feature: Seach google feature

Scenario Outline: Open google and enter the search term
 Given user hits the google url
 When the user enters the search term "<searchTerm>" and search
 Then he should see the search results
Examples:
 |searchTerm|
 |Talk to Mr.Teddy|
 |You are my everything|