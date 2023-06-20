Feature: Test the homepage functionality

        As a user
        i want to be able to validate the homepage functionality

        Background: User is in homepage
                Given user navigate to the homepage


        Scenario: Verify user can navigate to the homepage
                Then user is on the homepage


        Scenario Outline: user can search for products like Laptop,Smartphone,Calculator,Watch and Camera
                When user search for product as '<products>'
                And user click on the search button
                Then I should see the searched results of the products
                Examples:
                        | products   |
                        | Laptop     |
                        | Smartphone |
                        | Calculator |
                        | Watch      |
                        | Camera     |


        Scenario: Verify user can navigate to the help center
                When user clicks on the help link
                Then user is on the help center page


                