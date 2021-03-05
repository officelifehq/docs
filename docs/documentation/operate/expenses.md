# Expenses

## Overview

In some companies, employees have the right to buy stuff on behalf of the company. They can invite clients to the restaurant. Buy a book to learn a new skill. Go to a conference. You name it.

It’s well-known that managing expenses is a pain, in general, for the employer and the employees. It’s either done on a spreadsheet, or with the help of extremely expensive and complex tools like Acumatica or Concorde. We can do better, and simpler. The OfficeLife way, basically.

OfficeLife makes it really easy for employees to record an expense, and for the employer to manage those expenses. Even more importantly, it also allows for a very strict internal audit, necessary for most companies. Your accountant will be happy.

## Expense categories

Expenses can be classified into categories. A category (sometimes called GL) represents a type of expense. OfficeLife comes pre-configured with the following categories:

* maintenance and repairs,
* meals and entertainment,
* office expense,
* travel,
* motor vehicle expenses.

You can change the names of the categories, delete them or add new ones at anytime.

An expense doesn’t necessarily have to be associated with a category, but it’ll be much easier accounting-wise if it’s associated with one upon creation. When an expense doesn’t have a category, it’ll be simply put in the Uncategorized category.

### Creating an expense category

Creating an expense category is done in Adminland.

::: tip Rules
* Only employees with either the HR or administrator role can create a category.
* The name of the category is mandatory and limited to 255 characters.
:::

### Updating an expense category

Updating an expense category is done in Adminland.

::: tip Rules
* Only employees with either the HR or administrator role can update a category.
* The name of the category is mandatory and limited to 255 characters.
:::

### Deleting an expense category

Deleting an expense category is done in Adminland. When a category is deleted, all expenses linked to this category will be moved to the category called Uncategorized – which is a category that can’t be deleted. This is necessary as we need to find a way to find all those expenses back.

Before deleting a category, you also have the option to move all the expenses linked with this category to another category.

::: tip Rules
* Only employees with either the HR or administrator role</a> can delete a category.</li>
:::

## Employee’s expenses

Employees are responsible to log their expenses. In real life, employees want to be reimbursed as quickly as possible, and OfficeLife lets companies achieve this goal efficiently.

### Creating an expense

Expenses are logged on the employee’s dashboard. Anyone can log an expense, but no one can log an expense on behalf of someone else.

To create an expense, a few fields have to be filled:

* the amount, along with the currency,
* the date,
* the category of the expense.

::: tip Rules
* All employees can log an expense.
* Only a manager can approve an expense of an employee.
* Only employees with either the HR or administrator role can approve an expense already approved by a manager.
* The amount has to be a number. We support both comas or dots in the number, and spaces are allowed too. The amount is stored as cents in the database.
* The currency is mandatory and comes from a list of pre-configured list that can’t be changed.
* The category is optional but highly recommended.
:::

#### Note about the currency

Your employees can travel and therefore the expense can be charged in a different currency by the one supported by the company.

Every amount entered in OfficeLife is converted to [the company's currency](/docs/currency), but we always keep the original currency along with the original amount in the database. The expense’s amount is always displayed in the original currency, but if we needed to convert it to the company’s currency, we will also display the converted amount next to it.

When the employee enters an amount with a currency that is different from the company’s currency, OfficeLife will automatically convert it using the company’s currency, at the exchange rate that was in place at the date the expense occured.

If you change the currency of the company, we will recalculate all the converted amounts used in the company to match the new currency – however we will use the rate that were effective at the date the expense occured. Depending on the amount of previous expenses in your company, this process can take a long time, so please patient.

### Viewing expenses

Expenses can be seen in different places:

* on the employee's dashboard,
* on the Manager tab on the dashboard,
* on the Accounting tab on the dashboard,
* on the employee's profile page.

On the employee’s profile page, the expenses can only be seen by

* the employee who has created this expense,
* the manager of this employee,
* someone with either the HR or administrator role.

### Deleting an expense

Expenses can be deleted by the employee if it wasn't approved by a manager or an accountant yet. Once approved, the expense can’t be deleted by the employee who has created it. Only accountants can delete an expense from the system.

### Flow to reimburse an expense

There are two gates needed to reimburse an expense:

* the expense needs to be approved by the employee’s manager (if (s)he has one),
* the expense needs to be approved by the accounting department after the manager’s approval.

Now, let’s analyze in details what will happen as soon as an expense is created, depending on the situation.

#### Approval by the manager

In most cases, the employee will have a manager. In this situation, the manager has to approve the expense before it goes to the accounting department.

When an expense is logged by the employee:

* a notification is created for the manager to let him know that (s)he has to approve the expense,
* the status of the expense becomes waiting for manager’s approval.

The manager will now see the expense on his manager’s dashboard. The expense can be approved or rejected.

Note that if an employee has more than one manager, all his managers will receive a notification, and all of them will be able to approve or reject the expense. An expense only requires one approval to go to the next stage.

If the expense is approved:

* the expense is moved to the accounting’s approval phase for final approval.
* a notification is created for the employee to let him know that the expense goes to the next phase.
* the status of the expense becomes waiting for accounting’s approval.
* the expense appears on the accountant’s dashboard.

If the expense is rejected:

* the manager has to enter a reason as to why the expense is rejected.
* a notification is created for the employee to let him know.
* the status of the expense becomes rejected.

An expense that has been rejected at this stage will be locked and can’t be updated. When this happens, the employee would have to create a new expense to submit it again. This is easier for everyone and will lead to less errors eventually.

#### Approval by the accounting department

The accounting department is ultimately the last step of managing expenses in your company. They have the final word. It’s very rare that an expense will be rejected by this department if the manager already approved it, but it can happen.

Why does the accounting department need to approve the expense? Technically, they don’t « approve » the expense - they simply acknowledge that all the information is correct before being filed and reimbursed.

When the accountant approves the expense, (s)he needs to indicate the date the expense should appear on the employee’s paycheck.

If the expense is approved:

* A notification is created for the employee so (s)he knows the expense is finally accepted. Also, the expense’s status becomes accepted.
* The expense will appear on the employee’s dashboard for 30 days after the expense is approved, so there will be enough time for the reimbursement to appear on the employee’s paycheck.

If the expense is rejected:

* Accountants have to enter a reason as to why the expense is rejected.
* A notification is created for the manager, and the employee, to let them know that the expense is rejected.
* The status becomes rejected.
* The expense can’t be updated.

### Dealing with rejected expenses

Expenses that are rejected, should always come with a note explaining why it’s been rejected. Expenses can be rejected at two stages: by the manager and by the accounting department.

When an expense is rejected, the status of the expense becomes ‘locked’. No changes can be made on the expense once an expense is rejected.

### What happens when the employee's manager changes?

Sometimes managers change:

* The manager can be locked, or deleted from the system.
* The manager can be unassigned from the employee.
* The employee can be assigned a new manager.

What would happen to the expenses assigned to those managers in these cases?

**Manager is locked or deleted**

The expense will be moved to the accounting stage directly, bypassing any manager validation.

**Manager is unassigned**

If the employee has only one manager, the expense will be moved to the accounting stage.

If the employee has more than one manager, nothing happens to the expense.

**A new manager is assigned**

Nothing happens to the expenses already logged — they will remain on the stage they were at.

### When can an employee update an expense?

Employees can update their expenses as long as it has not been approved yet (by a manager or the accounting department). Once it’s approved, it’s too late.

### Can accountants approve an expense on behalf of a manager?

Sometimes, managers don’t take their roles seriously and forget to approve expenses. Therefore expenses sit for days and days before being approved and this can be very frustrating for the employee who’s waiting for the reimbursement. This is why accountants have the ability to approve an expense on behalf of managers and bypass their authority if necessary.

### What happens when an employee is deleted from the system?

When an employee is deleted from the system, all his expenses are kept in the database for audit purposes.

## Who can manage expenses: accountants

Managing expenses is restricted to people with a new kind of responsability called accountant. This role is distinct from any other roles in OfficeLife, on purpose.

Accountants should be able to manage expenses without having any other visibility on the other parts of OfficeLife. This is why we could have a regular employee with the accounting role, or an administrator without this role.

Accountants have the final word regarding expenses. They are not responsible to approve an expense per se — but they are responsible that every expense matches company policies.

Accountants have access to a new tab on the dashboard called Expenses. This is where they will be able to manage all the expenses that reach the Accounting stage. They will be able to verify an expense, reject one, and will be eventually responsible for putting the amount of the expense on the payroll of the employee.

The management of the accountants is done in Adminland.

### Attributing the accounting role to an employee

Inside Adminland there is a section called Expenses. This is where you have to go to manage accountants.

By default, in your account, no one will have access to the accountant role — not even administrators. You have to manually enter a name of an employee to add him to the list of authorized employees with this privilege.

To add a new accountant, you simply have to click on the Add button, then type the first letters of the person you want to add.

Finally, simply select the employee from the search results and this person will have an immediate access to the Expense tab on the dashboard.

Note that when the employee becomes an accountant, (s)he receives a notification that will inform him that (s)he has access to this new role.

### Removing the accounting role

Sometimes, someone should not have access to the accountant role anymore. OfficeLife provides a way to do this.

In the Expenses section of Adminland, you can click on Manage. This will bring the Accountant edit mode. Next to each name you have the ability to remove someone from the list of authorized people.

The change is effective immediately.

Note that when you lock an employee who had the accountant role, the employee loses automatically this role, for safety measure.
