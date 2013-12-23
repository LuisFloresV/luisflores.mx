#!/bin/bash
#
# Block some script kiddies

iptables -A INPUT -s 23.250.10.146 -j DROP
iptables -A INPUT -s 64.202.161.41 -j DROP